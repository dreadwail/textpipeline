import bin2dec from './bin2dec';
import dec2bin from './dec2bin';
import { Transform } from './types';

export * from './types';

const transforms: Transform[] = [bin2dec, dec2bin];

export const bySlug: Record<string, Transform> = transforms.reduce(
  (by, transform) => ({ ...by, [transform.slug]: transform }),
  {}
);

export const byProjectSlug: Record<string, Transform[]> = transforms.reduce<Record<string, Transform[]>>(
  (by, transform) => {
    const projectSlug = transform.project.slug;
    const bucket = by[projectSlug] || [];
    return {
      ...by,
      [projectSlug]: [...bucket, transform],
    };
  },
  {}
);
