import { License, mit } from '../licenses';

export interface OpenSourceProject {
  readonly name: string;
  readonly description: string;
  readonly slug: string;
  readonly projectHref: string;
  readonly repositoryHref: string;
  readonly license: License;
  readonly licenseText: string;
}

export const decimalJsLight: OpenSourceProject = {
  name: 'decimal.js-light',
  description: 'The light version of decimal.js, an arbitrary-precision Decimal type for JavaScript.',
  slug: 'decimal-js-light',
  projectHref: 'http://mikemcl.github.io/decimal.js-light',
  repositoryHref: 'https://github.com/MikeMcl/decimal.js-light/',
  license: mit,
  licenseText: `
The MIT Expat Licence.

Copyright (c) 2018 Michael Mclaughlin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  `,
};

const oss: OpenSourceProject[] = [decimalJsLight];

export const bySlug: Record<string, OpenSourceProject> = oss.reduce(
  (by, project) => ({ ...by, [project.slug]: project }),
  {}
);
