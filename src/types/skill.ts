import { IconType } from 'react-icons';

export interface Skill {
  name: string;

  category: string;

  icon: IconType;

  stars: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

  color: string;

  experience: string;

  details: string[];
}
