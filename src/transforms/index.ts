import csvToXls from './csvToXls';
import { Transform } from './types';
import xlsToCsv from './xlsToCsv';

const transforms: Record<string, Transform> = {
  [csvToXls.slug]: csvToXls,
  [xlsToCsv.slug]: xlsToCsv,
};

export default transforms;
