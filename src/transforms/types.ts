import { OpenSourceProject } from 'oss';

export interface Transform {
  readonly name: string;
  readonly slug: string;
  readonly inputType: string;
  readonly outputType: string;
  readonly project: OpenSourceProject;
  readonly defaultOutput: string;
  readonly execute: (input: string) => Promise<string>;
}
