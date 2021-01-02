import { Transform } from 'transforms';

import { testOss } from './oss';

export const testTransform: Transform = {
  name: 'Foo to Bar',
  slug: 'foo-to-bar',
  inputTypeName: 'Foo',
  outputTypeName: 'Bar',
  project: testOss,
  defaultOutput: '0',
  execute: async () => '42',
};
