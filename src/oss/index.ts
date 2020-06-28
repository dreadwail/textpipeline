import { decimalJs } from './decimaljs';
import { OpenSourceProject } from './types';

export { decimalJs };
export * from './types';

const oss: OpenSourceProject[] = [decimalJs];

export const bySlug: Record<string, OpenSourceProject> = oss.reduce(
  (by, project) => ({ ...by, [project.slug]: project }),
  {}
);
