import Decimal from 'decimal.js';
import { decimalJs } from 'oss';

import { Transform } from '../types';

const containsNonDecimal = (suspect: string): boolean => !/^(\d*\.)?\d+$/.test(suspect);

const transform: Transform = {
  name: 'Decimal to Binary',
  slug: 'decimal-to-binary',
  inputTypeName: 'Decimal',
  outputTypeName: 'Binary',
  openSourceProject: decimalJs,
  defaultOutput: '0',
  execute: async input => {
    if (!input) {
      throw new Error('No input detected.');
    }

    const sanitized = input.replace(/\s+/g, '');

    if (sanitized === '') {
      throw new Error('No input detected.');
    }

    if (containsNonDecimal(sanitized)) {
      throw new Error('Invalid decimal input.');
    }

    const decimal = new Decimal(sanitized);
    return decimal.toBinary().substring(2);
  },
};

export default transform;
