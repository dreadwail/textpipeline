import { Transform } from '../types';

const transform: Transform = {
  name: 'To Lowercase',
  slug: 'to-lower',
  inputTypeName: 'Text',
  outputTypeName: 'Lowercased Text',
  project: undefined,
  defaultOutput: '',
  execute: async (input: string) => input.toLowerCase(),
};

export default transform;
