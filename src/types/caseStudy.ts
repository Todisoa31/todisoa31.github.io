export interface CaseStudy {
  id: string;

  title: string;

  project: string;

  challenge: string;

  solution: string;

  result: string;

  highlight?: string;

  learnings: string[];

  technologies: string[];

  difficulty?: 'Intermédiaire' | 'Avancé' | 'Expert';

  domain?: string;
}
