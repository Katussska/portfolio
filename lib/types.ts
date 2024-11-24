export type Technologies =
  | 'React'
  | 'Java'
  | 'C++'
  | 'Ionic'
  | 'Spring Boot'
  | 'Javascript'
  | 'HTML'
  | 'CSS'
  | 'Tailwind'
  | 'Django'
  | 'Typescript'
  | 'Supabase'
  | 'PostgreSQL'
  | 'AI'
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
