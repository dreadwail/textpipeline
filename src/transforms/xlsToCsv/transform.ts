import { Transform } from '../types';

const xlsToCsv: Transform = {
  name: 'XLS to CSV',
  slug: 'xls-to-csv',
  inputType: 'XLS',
  outputType: 'CSV',
  project: {
    name: 'xlsx',
    projectHref: 'https://sheetjs.com/opensource',
    repositoryHref: 'https://github.com/SheetJS/js-xlsx',
    license: 'apache-2.0',
  },
  execute: input => Promise.resolve(`TEST OUTPUT: ${input}`),
};

export default xlsToCsv;
