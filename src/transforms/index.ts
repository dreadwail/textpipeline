import bin2dec from './bin2dec';
import dec2bin from './dec2bin';
import toUpper from './toUpper';
import toLower from './toLower';

import { Transform } from './types';

export * from './types';

const transforms: Transform[] = [bin2dec, dec2bin, toUpper, toLower];

export const bySlug: Record<string, Transform> = transforms.reduce(
  (by, transform) => ({ ...by, [transform.slug]: transform }),
  {}
);

export const byProjectSlug: Record<string, Transform[]> = transforms.reduce<Record<string, Transform[]>>(
  (by, transform) => {
    if (!transform.project) {
      return by;
    }
    const projectSlug = transform.project.slug;
    const bucket = by[projectSlug] || [];
    return {
      ...by,
      [projectSlug]: [...bucket, transform],
    };
  },
  {}
);
