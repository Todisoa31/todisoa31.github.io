export interface Project {
  id: string;

  title: string;

  company: string;

  sector: string;

  period: string;

  status: 'NDA' | 'Public';

  thumbnail: string;

  technologies: string[];

  shortDescription: string;

  overview: string;

  challenge: string;

  solution: string;

  result: string;

  responsibilities: string[];

  team: string;

  impact: string;

  screenshots: string[];

  featured?: boolean;
}
