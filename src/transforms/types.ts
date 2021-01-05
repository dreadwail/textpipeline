import { OpenSourceProject } from 'oss';

export interface Transform {
  readonly name: string;
  readonly slug: string;
  readonly inputTypeName: string;
  readonly outputTypeName: string;
  readonly openSourceProject: OpenSourceProject | undefined;
  readonly defaultOutput: string;
  readonly execute: (input: string) => Promise<string>;
}
