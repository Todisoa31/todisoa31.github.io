import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiJavascript,
  // SiMaterialdesign,
  SiMongodb,
  SiMui,
  // SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { RiAngularjsLine } from 'react-icons/ri';
import { TbBrandReactNative } from 'react-icons/tb';
import { VscDatabase, VscTools } from 'react-icons/vsc';
import { FaPalette } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';

import { Skill } from '../types/skill';

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    category: 'Développement',
    icon: SiJavascript,
    stars: 4.5,
    color: '#F7DF1E',
    experience: '7+ ans',
    details: [
      'ES6+',
      'Asynchrone',
      'Promises',
      'Closures',
      'Modules',
      'Architecture Frontend',
      'Architecture Backend',
      'Optimisation',
    ],
  },

  {
    name: 'TypeScript',
    category: 'Développement',
    icon: SiTypescript,
    stars: 4.5,
    color: '#3178C6',
    experience: '6+ ans',
    details: [
      'Types avancés',
      'Generics',
      'Decorators',
      'Architecture modulaire',
      'NestJS',
      'Next.js',
      'Angular',
      'Node.js',
    ],
  },

  {
    name: 'React',
    category: 'Développement',
    icon: SiReact,
    stars: 4.5,
    color: '#61DAFB',
    experience: '6+ ans',
    details: [
      'Architecture SPA',
      'Hooks',
      'Context API',
      'Redux Toolkit',
      'TanStack Query',
      'React Hook Form',
      'Material UI',
      'Framer Motion',
      'Optimisation',
      'Responsive Design',
    ],
  },

  {
    name: 'Next.js',
    category: 'Développement',
    icon: SiNextdotjs,
    stars: 3.5,
    color: '#FFFFFF',
    experience: '3+ ans',
    details: [
      'App Router',
      'SSR',
      'SSG',
      'Server Components',
      'SEO',
      'Metadata API',
      'Optimisation Image',
      'Performance',
    ],
  },

  {
    name: 'React Native',
    category: 'Développement',
    icon: TbBrandReactNative,
    stars: 3,
    color: '#61DAFB',
    experience: '1+ an',
    details: ['Maintenance', 'Correction de bugs', 'Navigation', 'Consommation API REST'],
  },

  {
    name: 'AngularJS',
    category: 'Développement',
    icon: RiAngularjsLine,
    stars: 3,
    color: '#DD0031',
    experience: '3 ans',
    details: [
      'Applications métier',
      'Templates',
      'Directives',
      'Services',
      'Filtres',
      'Maintenance',
      'Optimisation',
      'CMIS',
    ],
  },

  {
    name: 'Angular',
    category: 'Développement',
    icon: SiAngular,
    stars: 2.5,
    color: '#DD0031',
    experience: '2+ ans',
    details: ['Components', 'Services', 'RxJS', 'Lazy Loading', 'Angular Material', 'Maintenance'],
  },

  {
    name: 'Redux',
    category: 'Développement',
    icon: SiRedux,
    stars: 4,
    color: '#764ABC',
    experience: '3+ ans',
    details: ['Redux Toolkit', 'Slices', 'Store', 'State Management'],
  },

  {
    name: 'Node.js',
    category: 'Développement',
    icon: SiNodedotjs,
    stars: 4.5,
    color: '#5FA04E',
    experience: '6+ ans',
    details: [
      'REST API',
      'Scripts Node',
      'Migration de données',
      'Import FEC',
      'Traitement Batch',
      'Authentification JWT',
      'Optimisation',
      'Streams',
    ],
  },

  {
    name: 'NestJS',
    category: 'Développement',
    icon: SiNestjs,
    stars: 3.5,
    color: '#E0234E',
    experience: '3+ ans',
    details: [
      'REST',
      'GraphQL',
      'JWT',
      'Prisma',
      'Architecture modulaire',
      'Repository Pattern',
      'Guards',
      'Interceptors',
    ],
  },

  {
    name: 'GraphQL',
    category: 'Développement',
    icon: SiGraphql,
    stars: 3.5,
    color: '#E10098',
    experience: '3+ ans',
    details: ['Apollo', 'Resolvers', 'Mutations', 'Queries', 'Schema', 'Optimisation'],
  },

  {
    name: 'PostgreSQL',
    category: 'Bases de données',
    icon: SiPostgresql,
    stars: 2.5,
    color: '#336791',
    experience: '4+ ans',
    details: ['SQL', 'Index', 'Jointures', 'Transactions', 'Optimisation', 'Migration', 'CMIS'],
  },

  {
    name: 'MongoDB',
    category: 'Bases de données',
    icon: SiMongodb,
    stars: 3,
    color: '#47A248',
    experience: '4+ ans',
    details: [
      'Aggregation Pipeline',
      'Migration v4 → v7',
      'Index',
      'Optimisation',
      'Transactions',
      'Mongoose',
    ],
  },

  {
    name: 'Prisma',
    category: 'Bases de données',
    icon: SiPrisma,
    stars: 2.5,
    color: '#2D3748',
    experience: '2+ ans',
    details: ['ORM', 'Relations', 'Transactions', 'Migrations', 'Repository Pattern'],
  },

  {
    name: 'Redis',
    category: 'Bases de données',
    icon: SiRedis,
    stars: 2.5,
    color: '#DC382D',
    experience: '1+ an',
    details: ['Cache', 'Sessions', 'Rate Limiting', 'Performance'],
  },

  {
    name: 'RabbitMQ',
    category: 'Bases de données',
    icon: SiRabbitmq,
    stars: 2.5,
    color: '#FF6600',
    experience: '1+ an',
    details: ['Queues', 'Messages', 'Communication asynchrone'],
  },

  {
    name: 'Docker',
    category: 'DevOps & Outils',
    icon: SiDocker,
    stars: 2.5,
    color: '#2496ED',
    experience: '2+ ans',
    details: ['Docker Compose', 'Volumes', 'Networking', 'Images', 'Multi-stage Build'],
  },

  {
    name: 'Material UI',
    category: 'UI / UX',
    icon: SiMui,
    stars: 3.5,
    color: '#007FFF',
    experience: '5+ ans',
    details: ['DataGrid', 'Drawer', 'Dialog', 'Theme', 'Responsive', 'Custom Components'],
  },

  {
    name: 'Tailwind CSS',
    category: 'UI / UX',
    icon: SiTailwindcss,
    stars: 4,
    color: '#38BDF8',
    experience: '3+ ans',
    details: ['Responsive', 'Dark Mode', 'Animations', 'Glassmorphism', 'Design System'],
  },

  {
    name: 'Git',
    category: 'DevOps & Outils',
    icon: SiGit,
    stars: 3.5,
    color: '#F05032',
    experience: '7+ ans',
    details: ['Git Flow', 'Merge Requests', 'Rebase', 'Conflits', 'Code Review', 'CI/CD'],
  },

  {
    name: 'GitLab',
    category: 'DevOps & Outils',
    icon: SiGitlab,
    stars: 3.5,
    color: '#FC6D26',
    experience: '5+ ans',
    details: ['Merge Requests', 'CI/CD', 'Pipelines', 'Issues', 'Releases'],
  },

  {
    name: 'GitHub',
    category: 'DevOps & Outils',
    icon: SiGithub,
    stars: 3.5,
    color: '#FFFFFF',
    experience: '4+ ans',
    details: ['Repositories', 'Actions', 'Pull Requests', 'Branches'],
  },

  {
    name: 'Express.js',
    category: 'Développement',
    icon: SiExpress,
    stars: 4,
    color: '#FFFFFF',
    experience: '6+ ans',
    details: ['Middleware', 'REST API', 'JWT', 'Upload', 'Architecture'],
  },
];

export const categories = [
  {
    title: 'Développement',
    icon: MdDeveloperMode,
    color: '#3178C6',
    key: 'Développement',
  },
  {
    title: 'Bases de données',
    icon: VscDatabase,
    color: '#336791',
    key: 'Bases de données',
  },
  {
    title: 'DevOps & Outils',
    icon: VscTools,
    color: '#FC6D26',
    key: 'DevOps & Outils',
  },
  {
    title: 'UI / UX',
    icon: FaPalette,
    color: '#38BDF8',
    key: 'UI / UX',
  },
];
