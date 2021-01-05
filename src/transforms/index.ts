import bin2dec from './bin2dec';
import dec2bin from './dec2bin';
import toUpper from './toUpper';
import toLower from './toLower';
import reverseCharacters from './reverseCharacters';

import { Transform } from './types';

export * from './types';

const transforms: Transform[] = [bin2dec, dec2bin, toUpper, toLower, reverseCharacters];

export const bySlug: Record<string, Transform> = transforms.reduce(
  (by, transform) => ({ ...by, [transform.slug]: transform }),
  {}
);

export const byOpenSourceProjectSlug: Record<string, Transform[]> = transforms.reduce<Record<string, Transform[]>>(
  (by, transform) => {
    if (!transform.openSourceProject) {
      return by;
    }
    const openSourceProjectSlug = transform.openSourceProject.slug;
    const bucket = by[openSourceProjectSlug] || [];
    return {
      ...by,
      [openSourceProjectSlug]: [...bucket, transform],
    };
  },
  {}
);
