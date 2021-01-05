import { License } from 'licenses';

export interface OpenSourceProject {
  readonly name: string;
  readonly description: string;
  readonly slug: string;
  readonly href: string;
  readonly repositoryHref: string;
  readonly license: License;
  readonly licenseText: string;
}
