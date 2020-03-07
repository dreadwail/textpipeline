export interface License {
  readonly name: string;
  readonly slug: string;
  readonly href: string;
}

export const afl30: License = {
  name: 'Academic Free License v3.0',
  slug: 'afl-3.0',
  href: 'https://choosealicense.com/licenses/afl-3.0',
};
export const apache20: License = {
  name: 'Apache license 2.0',
  slug: 'apache-2.0',
  href: 'https://choosealicense.com/licenses/apache-2.0',
};
export const artistic20: License = {
  name: 'Artistic license 2.0',
  slug: 'artistic-2.0',
  href: 'https://choosealicense.com/licenses/artistic-2.0',
};
export const bsl10: License = {
  name: 'Boost Software License 1.0',
  slug: 'bsl-1.0',
  href: 'https://choosealicense.com/licenses/bsl-1.0',
};
export const bsd2: License = {
  name: 'BSD 2-clause "Simplified" license',
  slug: 'bsd-2-clause',
  href: 'https://choosealicense.com/licenses/bsd-2-clause',
};
export const bsd3: License = {
  name: 'BSD 3-clause "New" or "Revised" license',
  slug: 'bsd-3-clause',
  href: 'https://choosealicense.com/licenses/bsd-3-clause',
};
export const bsd3clear: License = {
  name: 'BSD 3-clause Clear license',
  slug: 'bsd-3-clause-clear',
  href: 'https://choosealicense.com/licenses/bsd-3-clause-clear',
};
export const cc: License = {
  name: 'Creative Commons license family',
  slug: 'cc',
  href: 'https://choosealicense.com/licenses/cc',
};
export const cczero1: License = {
  name: 'Creative Commons Zero v1.0 Universal',
  slug: 'cc0-1.0',
  href: 'https://choosealicense.com/licenses/cc0-1.0',
};
export const cc4: License = {
  name: 'Creative Commons Attribution 4.0',
  slug: 'cc-by-4.0',
  href: 'https://choosealicense.com/licenses/cc-by-4.0',
};
export const cc4shareAlike: License = {
  name: 'Creative Commons Attribution Share Alike 4.0',
  slug: 'cc-by-sa-4.0',
  href: 'https://choosealicense.com/licenses/cc-by-sa-4.0',
};
export const wtfpl: License = {
  name: 'Do What The F*ck You Want To Public License',
  slug: 'wtfpl',
  href: 'https://choosealicense.com/licenses/wtfpl',
};
export const ecl2: License = {
  name: 'Educational Community License v2.0',
  slug: 'ecl-2.0',
  href: 'https://choosealicense.com/licenses/ecl-2.0',
};
export const epl1: License = {
  name: 'Eclipse Public License 1.0',
  slug: 'epl-1.0',
  href: 'https://choosealicense.com/licenses/epl-1.0',
};
export const eupl11: License = {
  name: 'European Union Public License 1.1',
  slug: 'eupl-1.1',
  href: 'https://choosealicense.com/licenses/eupl-1.1',
};
export const agpl3: License = {
  name: 'GNU Affero General Public License v3.0',
  slug: 'agpl-3.0',
  href: 'https://choosealicense.com/licenses/agpl-3.0',
};
export const gpl: License = {
  name: 'GNU General Public License family',
  slug: 'gpl',
  href: 'https://choosealicense.com/licenses/gpl',
};
export const gpl2: License = {
  name: 'GNU General Public License v2.0',
  slug: 'gpl-2.0',
  href: 'https://choosealicense.com/licenses/gpl-2.0',
};
export const gpl3: License = {
  name: 'GNU General Public License v3.0',
  slug: 'gpl-3.0',
  href: 'https://choosealicense.com/licenses/gpl-3.0',
};
export const lgpl: License = {
  name: 'GNU Lesser General Public License family',
  slug: 'lgpl',
  href: 'https://choosealicense.com/licenses/lgpl',
};
export const lgpl21: License = {
  name: 'GNU Lesser General Public License v2.1',
  slug: 'lgpl-2.1',
  href: 'https://choosealicense.com/licenses/lgpl-2.1',
};
export const lgpl3: License = {
  name: 'GNU Lesser General Public License v3.0',
  slug: 'lgpl-3.0',
  href: 'https://choosealicense.com/licenses/lgpl-3.0',
};
export const isc: License = {
  name: 'ISC',
  slug: 'isc',
  href: 'https://choosealicense.com/licenses/isc',
};
export const lppl13: License = {
  name: 'LaTeX Project Public License v1.3c',
  slug: 'lppl-1.3c',
  href: 'https://choosealicense.com/licenses/lppl-1.3c',
};
export const mspl: License = {
  name: 'Microsoft Public License',
  slug: 'ms-pl',
  href: 'https://choosealicense.com/licenses/ms-pl',
};
export const mit: License = {
  name: 'MIT',
  slug: 'mit',
  href: 'https://choosealicense.com/licenses/mit',
};
export const mpl2: License = {
  name: 'Mozilla Public License 2.0',
  slug: 'mpl-2.0',
  href: 'https://choosealicense.com/licenses/mpl-2.0',
};
export const osl3: License = {
  name: 'Open Software License 3.0',
  slug: 'osl-3.0',
  href: 'https://choosealicense.com/licenses/osl-3.0',
};
export const postgresql: License = {
  name: 'PostgreSQL License',
  slug: 'postgresql',
  href: 'https://choosealicense.com/licenses/postgresql',
};
export const ofl11: License = {
  name: 'SIL Open Font License 1.1',
  slug: 'ofl-1.1',
  href: 'https://choosealicense.com/licenses/ofl-1.1',
};
export const ncsa: License = {
  name: 'University of Illinois/NCSA Open Source License',
  slug: 'ncsa',
  href: 'https://choosealicense.com/licenses/ncsa',
};
export const unlicense: License = {
  name: 'The Unlicense',
  slug: 'unlicense',
  href: 'https://choosealicense.com/licenses/unlicense',
};
export const zlib: License = {
  name: 'zLib License',
  slug: 'zlib',
  href: 'https://choosealicense.com/licenses/zlib',
};

const licenses: License[] = [
  afl30,
  apache20,
  artistic20,
  bsl10,
  bsd2,
  bsd3,
  bsd3clear,
  cc,
  cczero1,
  cc4,
  cc4shareAlike,
  wtfpl,
  ecl2,
  epl1,
  eupl11,
  agpl3,
  gpl,
  gpl2,
  gpl3,
  lgpl,
  lgpl21,
  lgpl3,
  isc,
  lppl13,
  mspl,
  mit,
  mpl2,
  osl3,
  postgresql,
  ofl11,
  ncsa,
  unlicense,
  zlib,
];

export const bySlug: Record<string, License> = licenses.reduce(
  (by, license) => ({ ...by, [license.slug]: license }),
  {}
);
