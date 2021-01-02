import copy from 'clipboard-copy';
import React from 'react';
import routes from 'routes';
import { testTransform } from 'testing/fixtures';
import { act, fireEvent, render, RenderResult } from 'testing/react';

import Transform, { TransformProps } from './Transform';

jest.mock('clipboard-copy');

class Deferred {
  promise: Promise<string>;
  reject: (error: any) => void = () => {};
  resolve: (outputValue: string) => void = () => {};

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

const getMaterialButtonByText = (result: RenderResult, text: string): HTMLButtonElement => {
  const elementWithText = result.getByText(text);
  const buttonNearby = elementWithText.closest('button');
  if (!buttonNearby) {
    throw new Error(`Unable to locate a button near the element having '${text}'`);
  }
  return buttonNearby;
};

const queryOSSLink = (result: RenderResult) => result.queryByRole('link', { name: /about this transform/i });
const getInputBox = (result: RenderResult) => result.getByLabelText(/Text to transform/i);
const getOutputBox = (result: RenderResult) => result.getByLabelText(/Transformed text/i);
const getTransformButton = (result: RenderResult) => getMaterialButtonByText(result, 'Transform');
const getClearButton = (result: RenderResult) => getMaterialButtonByText(result, 'Clear');
const getCopyButton = (result: RenderResult) => getMaterialButtonByText(result, 'Copy');
const queryCopiedIndicator = (result: RenderResult) => result.queryByText('Copied!');
const queryLoadingIndicator = (result: RenderResult) => result.queryByRole('progressbar');

describe('Transform', () => {
  let execute: jest.Mock;
  let defaultProps: TransformProps;
  let rendered: RenderResult;

  beforeEach(() => {
    execute = jest.fn(testTransform.execute);
    defaultProps = {
      name: testTransform.name,
      ossHref: `${routes.oss.path}/${testTransform.slug}`,
      inputTypeName: testTransform.inputTypeName,
      outputTypeName: testTransform.outputTypeName,
      defaultOutput: testTransform.defaultOutput,
      execute,
    };
  });

  describe('when the transform is not based upon OSS', () => {
    beforeEach(() => {
      rendered = render(<Transform {...defaultProps} ossHref={undefined} />);
    });

    it('renders no OSS project link', () => {
      expect(queryOSSLink(rendered)).not.toBeInTheDocument();
    });
  });

  describe('when the transform is based upon OSS', () => {
    let ossHref: string;

    beforeEach(() => {
      ossHref = '/oss/foo';
      rendered = render(<Transform {...defaultProps} ossHref={ossHref} />);
    });

    it('renders an OSS project link', () => {
      const ossLink = queryOSSLink(rendered);
      expect(ossLink).toHaveAttribute('href', ossHref);
    });
  });

  describe('before the user has entered text in the input box', () => {
    beforeEach(() => {
      rendered = render(<Transform {...defaultProps} />);
    });

    it('renders the transform button disabled', () => {
      expect(getTransformButton(rendered)).toBeDisabled();
    });

    it('renders the clear button disabled', () => {
      expect(getClearButton(rendered)).toBeDisabled();
    });

    it('renders the copy-to-clipboard button disabled', () => {
      expect(getCopyButton(rendered)).toBeDisabled();
    });
  });

  describe('when text is typed into the input box', () => {
    beforeEach(() => {
      rendered = render(<Transform {...defaultProps} />);
    });

    beforeEach(() => {
      fireEvent.change(getInputBox(rendered), { target: { value: 'stuff' } });
    });

    it('updates the state with the text', () => {
      expect(getInputBox(rendered)).toHaveValue('stuff');
    });
  });

  describe('when no text was input and the transform button is clicked', () => {
    beforeEach(() => {
      rendered = render(<Transform {...defaultProps} />);
    });

    beforeEach(() => {
      fireEvent.change(getInputBox(rendered), { target: { value: ' ' } });
      fireEvent.click(getTransformButton(rendered));
    });

    it('does not place any text in the output box', () => {
      expect(getOutputBox(rendered)).toHaveValue('');
    });

    it('resets the copied state', () => {
      expect(queryCopiedIndicator(rendered)).not.toBeInTheDocument();
    });
  });

  describe('after the user has entered text in the input box', () => {
    let inputValue: string;

    beforeEach(() => {
      rendered = render(<Transform {...defaultProps} />);
    });

    beforeEach(() => {
      inputValue = 'stuff';
      fireEvent.change(getInputBox(rendered), { target: { value: inputValue } });
    });

    describe('when the clear button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(getClearButton(rendered));
      });

      it('resets the input box to empty', () => {
        expect(getInputBox(rendered)).toHaveValue('');
      });

      it('renders the transform button disabled', () => {
        expect(getTransformButton(rendered)).toBeDisabled();
      });

      it('renders the clear button disabled', () => {
        expect(getClearButton(rendered)).toBeDisabled();
      });

      it('renders the copy-to-clipboard button disabled', () => {
        expect(getCopyButton(rendered)).toBeDisabled();
      });
    });

    describe('when the transform will fail', () => {
      let deferred: Deferred;

      beforeEach(() => {
        deferred = new Deferred();
        (execute as jest.Mock).mockReturnValue(deferred.promise);
      });

      describe('when the transform button is clicked', () => {
        beforeEach(() => {
          fireEvent.click(getTransformButton(rendered));
        });

        describe('before the transform completes', () => {
          it('displays a loading indicator', () => {
            expect(queryLoadingIndicator(rendered)).toBeInTheDocument();
          });
        });

        describe.each([['boom', 'boom'], [new Error('boom'), 'boom'], [42, 'Unable to transform text.']])(
          'after the transform fails with %p',
          (error, expectedMessage) => {
            beforeEach(async () => {
              await act(async () => {
                deferred.reject(error);
                await Promise.allSettled([deferred.promise]);
              });
            });

            it('no longer displays a loading indicator', async () => {
              expect(queryLoadingIndicator(rendered)).not.toBeInTheDocument();
            });

            it('sets the error state', () => {
              expect(rendered.queryByText(expectedMessage)).toBeInTheDocument();
            });

            it('sets the output to the default output value from the transform', () => {
              expect(getOutputBox(rendered)).toHaveValue(testTransform.defaultOutput);
            });

            describe('when the clear button is clicked', () => {
              beforeEach(() => {
                fireEvent.click(getClearButton(rendered));
              });

              it('resets the input box to empty', () => {
                expect(getInputBox(rendered)).toHaveValue('');
              });

              it('resets the output box to empty', () => {
                expect(getOutputBox(rendered)).toHaveValue('');
              });

              it('renders the transform button disabled', () => {
                expect(getTransformButton(rendered)).toBeDisabled();
              });

              it('renders the clear button disabled', () => {
                expect(getClearButton(rendered)).toBeDisabled();
              });

              it('renders the copy-to-clipboard button disabled', () => {
                expect(getCopyButton(rendered)).toBeDisabled();
              });

              it('clears the error state', () => {
                expect(rendered.queryByText("Once you've finished click the button to transform")).toBeInTheDocument();
              });
            });
          }
        );
      });
    });

    describe('when the transform will succeed', () => {
      let deferred: Deferred;

      beforeEach(() => {
        deferred = new Deferred();
        (execute as jest.Mock).mockReturnValue(deferred.promise);
      });

      describe('when the transform button is clicked', () => {
        beforeEach(() => {
          fireEvent.click(getTransformButton(rendered));
        });

        describe('before the transform completes', () => {
          it('displays a loading indicator', () => {
            expect(queryLoadingIndicator(rendered)).toBeInTheDocument();
          });
        });

        describe('after the transform succeeds', () => {
          let outputValue: string;

          beforeEach(async () => {
            await act(async () => {
              outputValue = 'test-output';
              deferred.resolve(outputValue);
              await deferred.promise;
            });
          });

          it('no longer displays a loading indicator', async () => {
            expect(queryLoadingIndicator(rendered)).not.toBeInTheDocument();
          });

          describe('when the copy-to-clipboard button is clicked', () => {
            beforeEach(() => {
              fireEvent.click(getCopyButton(rendered));
            });

            it('copies the text to the clipboard', () => {
              expect(copy).toHaveBeenCalledWith(outputValue);
            });

            it('displays an indication that the text was copied', () => {
              expect(queryCopiedIndicator(rendered)).toBeInTheDocument();
            });

            describe('when the transform button is clicked again', () => {
              beforeEach(async () => {
                fireEvent.click(getTransformButton(rendered));

                await act(async () => {
                  deferred.resolve(outputValue);
                  await deferred.promise;
                });
              });

              it('clears the copied state', () => {
                expect(queryCopiedIndicator(rendered)).not.toBeInTheDocument();
              });
            });
          });

          describe('when the clear button is clicked', () => {
            beforeEach(() => {
              fireEvent.click(getClearButton(rendered));
            });

            it('resets the input box to empty', () => {
              expect(getInputBox(rendered)).toHaveValue('');
            });

            it('resets the output box to empty', () => {
              expect(getOutputBox(rendered)).toHaveValue('');
            });

            it('renders the transform button disabled', () => {
              expect(getTransformButton(rendered)).toBeDisabled();
            });

            it('renders the clear button disabled', () => {
              expect(getClearButton(rendered)).toBeDisabled();
            });

            it('renders the copy-to-clipboard button disabled', () => {
              expect(getCopyButton(rendered)).toBeDisabled();
            });

            it('clears the error state', () => {
              expect(rendered.queryByText("Once you've finished click the button to transform")).toBeInTheDocument();
            });
          });
        });
      });
    });
  });
});
