import bin2dec from './bin2dec';
import { Transform } from './types';

export * from './types';

const transforms: Transform[] = [bin2dec];

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
