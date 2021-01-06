import decamelize from 'decamelize';
import { decamelize as decamelizeProject } from 'oss';

import { Transform } from '../types';

const transform: Transform = {
  name: 'camelCase to snake_case',
  slug: 'camel-to-snake',
  inputTypeName: 'camelCase',
  outputTypeName: 'snake_case',
  openSourceProject: decamelizeProject,
  defaultOutput: '',
  execute: async input => {
    if (!input || !input.trim()) {
      throw new Error('No input detected.');
    }
    return decamelize(input, '_');
  },
};

export default transform;
