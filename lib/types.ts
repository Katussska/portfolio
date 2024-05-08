export type Technologies =
  | 'React'
  | 'Java'
  | 'C++'
  | 'Ionic'
  | 'Spring'
  | 'Javascript'
  | 'HTML'
  | 'CSS'
  | 'Django'
  | 'Typescript'
  | 'PostgreSQL'
  | 'Docker';

export type Project = {
  title: string;
  description: string;
  badges: Array<Technologies>;
  screenshots: {
    mobile: string;
    desktop: string;
  };
  liveUrl: string;
  codeUrl: string;
};
