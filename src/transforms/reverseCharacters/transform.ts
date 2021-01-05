import { Transform } from '../types';

const transform: Transform = {
  name: 'Reverse',
  slug: 'reverse',
  inputTypeName: 'Text',
  outputTypeName: 'Reversed Text',
  project: undefined,
  defaultOutput: '',
  execute: async input =>
    input
      .split('')
      .reverse()
      .join(''),
};

export default transform;
