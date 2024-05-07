export type Technologies = 'React' | 'Java' | 'C++';

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
