import { Transform } from '../types';

const csvToXls: Transform = {
  name: 'CSV to XLS',
  slug: 'csv-to-xls',
  inputType: 'CSV',
  outputType: 'XLS',
  project: {
    name: 'xlsx',
    projectHref: 'https://sheetjs.com/opensource',
    repositoryHref: 'https://github.com/SheetJS/js-xlsx',
    license: 'apache-2.0',
  },
  execute: input => Promise.resolve(`TEST OUTPUT: ${input}`),
};

export default csvToXls;
