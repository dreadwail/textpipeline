import { decamelize } from './decamelize';
import { decimalJs } from './decimaljs';
import { OpenSourceProject } from './types';

export { decimalJs, decamelize };
export * from './types';

const oss: OpenSourceProject[] = [decimalJs, decamelize];

export const bySlug: Record<string, OpenSourceProject> = oss.reduce(
  (by, openSourceProject) => ({ ...by, [openSourceProject.slug]: openSourceProject }),
  {}
);
