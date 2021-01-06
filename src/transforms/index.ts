import bin2dec from './bin2dec';
import camelCaseToSnakeCase from './camelCaseToSnakeCase';
import dec2bin from './dec2bin';
import reverseCharacters from './reverseCharacters';
import toLower from './toLower';
import toUpper from './toUpper';
import { Transform } from './types';

export * from './types';

const transforms: Transform[] = [bin2dec, camelCaseToSnakeCase, dec2bin, reverseCharacters, toUpper, toLower];

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
