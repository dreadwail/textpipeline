import { storiesOf } from '@storybook/react';
import React from 'react';
import { testOss } from 'testing/fixtures';

import OpenSourceProject from './OpenSourceProject';

storiesOf('OpenSourceProject', module).add('default', () => (
  <OpenSourceProject
    name={testOss.name}
    description={testOss.description}
    slug={testOss.slug}
    href={testOss.href}
    repositoryHref={testOss.repositoryHref}
    license={testOss.license}
    licenseText={testOss.licenseText}
    transformsPath="/transforms"
  />
));
