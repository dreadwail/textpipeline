// export interface License {
//   readonly name: string;
//   readonly href: string;
//   readonly text: string;
// }

export interface OpenSourceProject {
  readonly name: string;
  readonly projectHref: string;
  readonly repositoryHref: string;
  readonly license: 'mit' | 'apache-2.0';
}

export interface Transform {
  readonly name: string;
  readonly slug: string;
  readonly inputType: string;
  readonly outputType: string;
  readonly project: OpenSourceProject;
  readonly execute: (input: string) => Promise<string>;
}
