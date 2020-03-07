import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { testOss, testTransform as mockTransform } from '../../fixtures';
import OpenSourceProject from './OpenSourceProject';

jest.mock('../../transforms', () => ({
  byProjectSlug: {
    'test-open-source-project': [mockTransform],
  },
}));

describe('OpenSourceProject', () => {
  let rendered: ShallowWrapper;

  describe('when there are transforms for this project', () => {
    beforeEach(() => {
      rendered = shallow(
        <OpenSourceProject
          name={testOss.name}
          description={testOss.description}
          slug={testOss.slug}
          projectHref={testOss.projectHref}
          repositoryHref={testOss.repositoryHref}
          license={testOss.license}
          licenseText={testOss.licenseText}
          transformsPath="/transforms"
        />
      );
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when there are no transforms for this project', () => {
    beforeEach(() => {
      rendered = shallow(
        <OpenSourceProject
          name={testOss.name}
          description={testOss.description}
          slug="without-transforms"
          projectHref={testOss.projectHref}
          repositoryHref={testOss.repositoryHref}
          license={testOss.license}
          licenseText={testOss.licenseText}
          transformsPath="/transforms"
        />
      );
    });

    it('renders correctly', () => {
      expect(rendered).toMatchSnapshot();
    });
  });
});
