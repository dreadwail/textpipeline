import { Transform } from '../types';

const transform: Transform = {
  name: 'To Uppercase',
  slug: 'to-upper',
  inputTypeName: 'Text',
  outputTypeName: 'Uppercased Text',
  openSourceProject: undefined,
  defaultOutput: '',
  execute: async (input: string) => input.toUpperCase(),
};

export default transform;
