export interface FooterLink {
  readonly icon: string;
  readonly text: string;
  readonly href: string;
}

export interface Footer {
  [key: string]: FooterLink[];
}
