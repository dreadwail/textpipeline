import CircularProgress from '@material-ui/core/CircularProgress';
import copy from 'clipboard-copy';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Transform, { TransformProps } from './Transform';

jest.mock('clipboard-copy');

class Deferred {
  promise: Promise<void>;
  reject: (error: any) => void = () => {};
  resolve: () => void = () => {};

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

const getInputBox = (rendered: ShallowWrapper<TransformProps>) => rendered.find('#input-box');
const getOutputBox = (rendered: ShallowWrapper<TransformProps>) => rendered.find('#output-box');
const getTransformButton = (rendered: ShallowWrapper<TransformProps>) => rendered.find('#transform-button');
const getClearButton = (rendered: ShallowWrapper<TransformProps>) => rendered.find('#clear-button');
const getCopyButton = (rendered: ShallowWrapper<TransformProps>) => rendered.find('#copy-button');
const getCopiedIndicator = (rendered: ShallowWrapper<TransformProps>) => rendered.find('#copied-indicator');
const getLoadingIndicator = (rendered: ShallowWrapper<TransformProps>) => rendered.find(CircularProgress);

describe('Transform', () => {
  let execute: TransformProps['execute'];
  let rendered: ShallowWrapper<TransformProps>;

  beforeEach(() => {
    execute = jest.fn((input: string) => Promise.resolve(`${input} - transformed to a Bar!`));
    rendered = shallow(<Transform name="Foo to Bar" ossHref="#" inputType="FOO" outputType="BAR" execute={execute} />);
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });

  describe('before the user has entered text in the input box', () => {
    beforeEach(() => {
      getInputBox(rendered).simulate('change', { target: { value: '' } });
    });

    it('renders the transform button disabled', () => {
      expect(getTransformButton(rendered).prop('disabled')).toBe(true);
    });

    it('renders the clear button disabled', () => {
      expect(getClearButton(rendered).prop('disabled')).toBe(true);
    });

    it('renders the copy-to-clipboard button disabled', () => {
      expect(getCopyButton(rendered).prop('disabled')).toBe(true);
    });
  });

  describe('when text is typed into the input box', () => {
    beforeEach(() => {
      getInputBox(rendered).simulate('change', { target: { value: 'stuff' } });
    });

    it('updates the state with the text', () => {
      expect(getInputBox(rendered).prop('value')).toEqual('stuff');
    });
  });

  describe('when no text was input and the transform button is clicked', () => {
    beforeEach(() => {
      getInputBox(rendered).simulate('change', { target: { value: '' } });
      getTransformButton(rendered).simulate('click');
    });

    it('does not place any text in the output box', () => {
      expect(getOutputBox(rendered).prop('value')).toEqual('');
    });

    it('resets the copied state', () => {
      expect(getCopiedIndicator(rendered).length).toEqual(0);
    });
  });

  describe('after the user has entered text in the input box', () => {
    beforeEach(() => {
      getInputBox(rendered).simulate('change', { target: { value: 'stuff' } });
    });

    describe('when the clear button is clicked', () => {
      beforeEach(() => {
        getClearButton(rendered).simulate('click');
      });

      it('resets the input box to empty', () => {
        expect(getInputBox(rendered).prop('value')).toEqual('');
      });

      it('renders the transform button disabled', () => {
        expect(getTransformButton(rendered).prop('disabled')).toBe(true);
      });

      it('renders the clear button disabled', () => {
        expect(getClearButton(rendered).prop('disabled')).toBe(true);
      });

      it('renders the copy-to-clipboard button disabled', () => {
        expect(getCopyButton(rendered).prop('disabled')).toBe(true);
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
          getTransformButton(rendered).simulate('click');
        });

        describe('before the transform completes', () => {
          it('displays a loading indicator', () => {
            expect(getLoadingIndicator(rendered).length).toEqual(1);
          });
        });

        describe.each([
          { error: 'boom', expectedMessage: 'There was an error! boom' },
          { error: new Error('boom'), expectedMessage: 'There was an error! boom' },
          { error: 42, expectedMessage: 'There was an error! Unable to transform text.' },
        ])('after the transform fails', ({ error, expectedMessage }) => {
          beforeEach(() => {
            deferred.reject(error);
          });

          it('no longer displays a loading indicator', async () => {
            try {
              await deferred.promise;
            } catch {
              expect(getLoadingIndicator(rendered).length).toEqual(0);
            }
          });

          it('sets the error state', () => {
            expect(getInputBox(rendered).prop('helperText')).toEqual(expectedMessage);
          });

          it('renders correctly', () => {
            expect(rendered).toMatchSnapshot();
          });

          describe('when the clear button is clicked', () => {
            beforeEach(() => {
              getClearButton(rendered).simulate('click');
            });

            it('resets the input box to empty', () => {
              expect(getInputBox(rendered).prop('value')).toEqual('');
            });

            it('resets the output box to empty', () => {
              expect(getOutputBox(rendered).prop('value')).toEqual('');
            });

            it('renders the transform button disabled', () => {
              expect(getTransformButton(rendered).prop('disabled')).toBe(true);
            });

            it('renders the clear button disabled', () => {
              expect(getClearButton(rendered).prop('disabled')).toBe(true);
            });

            it('renders the copy-to-clipboard button disabled', () => {
              expect(getCopyButton(rendered).prop('disabled')).toBe(true);
            });

            it('clears the error state', () => {
              expect(getInputBox(rendered).prop('helperText')).toEqual(
                "Once you've finished click the button to transform"
              );
            });
          });
        });
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
          getTransformButton(rendered).simulate('click');
        });

        describe('before the transform completes', () => {
          it('displays a loading indicator', () => {
            expect(getLoadingIndicator(rendered).length).toEqual(1);
          });
        });

        describe('after the transform succeeds', () => {
          beforeEach(() => {
            deferred.resolve();
          });

          it('no longer displays a loading indicator', async () => {
            await deferred.promise;
            expect(getLoadingIndicator(rendered).length).toEqual(0);
          });

          describe('when the copy-to-clipboard button is clicked', () => {
            beforeEach(() => {
              getCopyButton(rendered).simulate('click');
            });

            it('copies the text to the clipboard', () => {
              expect(copy).toHaveBeenCalled();
            });

            it('displays an indication that the text was copied', () => {
              expect(getCopiedIndicator(rendered).length).toEqual(1);
            });

            describe('when the transform button is clicked again', () => {
              beforeEach(() => {
                getTransformButton(rendered).simulate('click');
              });

              it('clears the copied state', () => {
                expect(getCopiedIndicator(rendered).length).toEqual(0);
              });
            });
          });

          describe('when the clear button is clicked', () => {
            beforeEach(() => {
              getClearButton(rendered).simulate('click');
            });

            it('resets the input box to empty', () => {
              expect(getInputBox(rendered).prop('value')).toEqual('');
            });

            it('resets the output box to empty', () => {
              expect(getOutputBox(rendered).prop('value')).toEqual('');
            });

            it('renders the transform button disabled', () => {
              expect(getTransformButton(rendered).prop('disabled')).toBe(true);
            });

            it('renders the clear button disabled', () => {
              expect(getClearButton(rendered).prop('disabled')).toBe(true);
            });

            it('renders the copy-to-clipboard button disabled', () => {
              expect(getCopyButton(rendered).prop('disabled')).toBe(true);
            });

            it('clears the error state', () => {
              expect(getInputBox(rendered).prop('helperText')).toEqual(
                "Once you've finished click the button to transform"
              );
            });
          });
        });
      });
    });
  });
});
