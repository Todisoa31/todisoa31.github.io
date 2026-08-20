import { CaseStudy } from '../types/caseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'mongodb-performance',

    title: 'Optimisation des performances MongoDB',

    project: 'Plateforme Assurance',

    challenge:
      "Certaines fonctionnalités métier manipulaient plusieurs milliers d'enregistrements. Les utilisateurs devaient parfois attendre plusieurs secondes avant d'obtenir les résultats.",

    solution:
      "Analyse des requêtes lentes, ajout d'index ciblés, optimisation des Aggregation Pipelines, réduction des données retournées par les API et amélioration des traitements Node.js.",

    result:
      "Réduction jusqu'à 40 % du temps de réponse des principales fonctionnalités tout en diminuant la charge des serveurs.",

    learnings: [
      'MongoDB Indexes',
      'Aggregation Pipeline',
      'Analyse des performances',
      'Optimisation Backend',
    ],

    technologies: ['MongoDB', 'Node.js', 'TypeScript'],
  },

  // {
  //   id: "migration",

  //   title: "Migration MongoDB v4 → v7",

  //   project: "Gestion documentaire",

  //   challenge:
  //     "Migrer une base de données contenant plusieurs années de documents tout en limitant les risques d'interruption et de perte de données.",

  //   solution:
  //     "Développement de scripts Node.js automatisés pour la migration des collections, validation des données et vérification de la compatibilité applicative.",

  //   result:
  //     "Migration réalisée avec succès tout en améliorant la stabilité et les performances globales de la plateforme.",

  //   learnings: [
  //     "Migration de données",
  //     "Automatisation",
  //     "Validation",
  //     "Maintenance",
  //   ],

  //   technologies: [
  //     "MongoDB",
  //     "Node.js",
  //     "TypeScript",
  //   ],
  // },

  {
    id: 'cee',

    title: 'Architecture de gestion des dossiers CEE',

    project: 'Plateforme CEE',

    challenge:
      "Les différents secteurs d'activité possédaient leurs propres règles métier, formulaires et processus de validation. L'application devait rester flexible sans dupliquer le code.",

    solution:
      "Création d'une architecture basée sur des composants React réutilisables, formulaires dynamiques et factorisation des traitements communs.",

    result:
      'Développement plus rapide des nouvelles fonctionnalités et amélioration de la productivité des équipes métier.',

    learnings: [
      'Architecture React',
      'Composants réutilisables',
      'UX métier',
      'Formulaires dynamiques',
    ],

    technologies: ['React', 'Next.js', 'JavaScript'],
  },

  {
    id: 'data-migration',

    title: 'Migration de données entre deux environnements',

    project: 'Gestion Comptable',

    challenge:
      "Migrer des données provenant d'une base PostgreSQL située en France vers un environnement de production à Madagascar tout en garantissant l'intégrité des informations et en évitant les doublons.",

    solution:
      "Développement d'un script Node.js capable d'extraire les données, de normaliser certaines valeurs, de détecter les doublons potentiels, de vérifier l'existence des enregistrements avant insertion puis de valider la cohérence des données après migration.",

    result:
      "Migration réalisée sans perte d'information avec des contrôles fonctionnels validés par les équipes métier.",

    learnings: [
      'Migration de données',
      'Qualité des données',
      'Node.js',
      'PostgreSQL',
      'Validation métier',
    ],

    technologies: ['Node.js', 'PostgreSQL', 'CMIS'],
  },

  {
    id: 'frt-import',

    title: 'Automatisation du dépôt massif des Fiches de Renseignement Technique',

    project: 'Gestion Comptable',

    challenge:
      "Les utilisateurs devaient renseigner manuellement les Fiches de Renseignement Technique (FRT) pour chaque dossier, une tâche longue, répétitive et source d'erreurs.",

    solution:
      "Développement d'un module permettant l'import massif des FRT. Chaque fichier était analysé, validé puis utilisé pour enrichir automatiquement les propriétés métier telles que les consignes, anomalies et paramètres de traitement.",

    result:
      'Réduction significative des traitements manuels, amélioration de la qualité des données et accélération de la préparation des dossiers.',

    highlight:
      "Cette fonctionnalité a permis d'automatiser un processus métier auparavant entièrement manuel.",

    learnings: [
      'Parsing',
      'Validation',
      'Traitement Batch',
      'CMIS',
      'Architecture métier',
      'Qualité des données',
    ],

    technologies: ['Node.js', 'AngularJS', 'TypeScript', 'PostgreSQL', 'CMIS'],
  },

  {
    id: 'balance-carree',

    title: 'Développement du module Balance Carrée',

    project: 'Gestion Comptable',

    challenge:
      'Les équipes comptables devaient vérifier la cohérence des écritures sur de gros volumes de données tout en conservant des temps de calcul raisonnables.',

    solution:
      "Développement d'un module permettant de calculer automatiquement la balance carrée avec filtres dynamiques, agrégation des écritures et export CSV.",

    result:
      'Calcul beaucoup plus rapide des balances comptables et amélioration de la productivité des équipes métier.',

    highlight: 'Cette fonctionnalité est devenue un outil quotidien pour les équipes comptables.',

    learnings: ['Calcul comptable', 'Agrégation', 'Optimisation', 'Export CSV'],

    technologies: ['AngularJS', 'Node.js', 'PostgreSQL', 'CMIS'],
  },

  {
    id: 'workbatch',

    title: 'Optimisation du moteur WorkBatch',

    project: 'Gestion Documentaire et Comptable',

    challenge:
      "Les documents devaient être regroupés automatiquement en lots équilibrés afin d'être distribués aux opérateurs de traitement sans créer de doublons.",

    solution:
      'Optimisation des algorithmes de création des WorkBatch, amélioration des tris, regroupement des documents et contrôle des traitements.',

    result:
      'Création plus rapide des lots, meilleure répartition des documents et diminution des traitements inutiles.',

    highlight: 'Travail réalisé sur un moteur métier manipulant plusieurs milliers de documents.',

    learnings: ['Algorithmes', 'Batch Processing', 'Optimisation', 'Architecture documentaire'],

    technologies: ['Node.js', 'TypeScript', 'CMIS', 'PostgreSQL'],
  },

  {
    id: 'critical-production-incident',

    title: "Résolution autonome d'un incident critique sur Numen Expert",

    project: 'Gestion Comptable',

    challenge:
      "Une fonctionnalité critique de l'application ne fonctionnait plus correctement et impactait directement les équipes métier. La fonctionnalité concernée avait été développée historiquement par l'équipe française et, face à la complexité du problème, la décision initiale était d'escalader l'incident afin qu'elle intervienne.",

    solution:
      "Avant de solliciter l'équipe française, j'ai proposé de prendre le temps d'analyser le problème. J'ai reproduit l'incident, étudié le fonctionnement complet de la fonctionnalité, analysé les templates AngularJS ainsi que les traitements Node.js associés afin de comprendre précisément le comportement de l'application. Après plusieurs heures d'investigation, j'ai identifié la cause racine du dysfonctionnement, développé un correctif, réalisé les tests nécessaires et validé son bon fonctionnement avant sa mise en production.",

    result:
      "Le problème a été résolu dès le lendemain sans intervention de l'équipe française. Cette résolution a permis de réduire le temps d'indisponibilité de la fonctionnalité, d'éviter une escalade internationale et de démontrer la capacité de l'équipe locale à gérer des incidents complexes de manière autonome.",

    highlight:
      "Cette expérience m'a appris qu'avant d'escalader un problème, il est essentiel de prendre le temps de comprendre son fonctionnement. Une analyse méthodique permet souvent d'identifier une solution durable, même sur une application complexe que l'on ne connaît pas encore parfaitement. Elle a également renforcé ma confiance dans ma capacité à résoudre des incidents critiques de manière autonome.",

    learnings: [
      'Analyse de cause racine (Root Cause Analysis)',
      "Débogage d'applications AngularJS complexes",
      "Lecture et compréhension d'une base de code existante",
      "Résolution d'incidents de production",
      "Prise d'initiative",
      'Autonomie technique',
      'Validation fonctionnelle',
      'Communication avec les équipes projet',
    ],

    technologies: [
      'AngularJS',
      'Angular',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'PostgreSQL',
      'CMIS',
    ],
  },

  {
    id: 'fec-import',

    title: "Finalisation et intégration d'un moteur d'import FEC",

    project: 'Gestion Comptable',

    challenge:
      "Le moteur d'import FEC avait été initié mais n'était pas encore terminé. Il devait être repris, complété puis intégré dans une application métier déjà en production.",

    solution:
      "Analyse de l'architecture existante, finalisation des fonctionnalités manquantes, amélioration des traitements d'import, intégration avec Numen Expert et validation des données importées avec les équipes métier.",

    result:
      "Le moteur a été mis en production avec succès et permet désormais d'automatiser l'import des Fichiers des Écritures Comptables ainsi que l'intégration des données dans l'application.",

    learnings: [
      "Reprise d'un projet existant",
      'Reverse engineering',
      'Import de données',
      'Node.js',
      'Architecture logicielle',
      'Qualité des données',
    ],

    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'CMIS'],

    highlight:
      "Cette expérience m'a appris à reprendre un développement existant, à comprendre rapidement une architecture que je n'avais pas conçue et à mener le projet jusqu'à sa mise en production.",
  },

  {
    id: 'shopify',

    title: "Optimisation d'une boutique Shopify",

    project: 'Optimisation Shopify',

    challenge:
      'Une boutique Shopify présentait un temps de chargement élevé causé par des scripts JavaScript inutiles, des images volumineuses et plusieurs ressources bloquantes.',

    solution:
      'Audit complet avec Lighthouse, suppression des scripts inutilisés, optimisation des images, lazy loading, optimisation du thème Shopify et réduction des ressources critiques.',

    result:
      'Amélioration sensible des performances de la boutique, meilleure expérience utilisateur et optimisation du référencement naturel.',

    learnings: [
      'Lighthouse',
      'Core Web Vitals',
      'Optimisation JavaScript',
      'Optimisation des images',
    ],

    technologies: ['Shopify', 'JavaScript', 'Liquid', 'HTML', 'CSS'],
  },

  {
    id: 'ecommerce',

    title: "Architecture d'une plateforme E-commerce",

    project: 'Plateforme E-commerce',

    challenge:
      'Développer une plateforme capable de gérer un catalogue important de produits, les commandes et les échanges entre le frontend et le backend.',

    solution:
      'Développement du frontend React, création des API Node.js, intégration de GraphQL et modélisation de la base PostgreSQL avec Sequelize.',

    result:
      'Une plateforme performante offrant une navigation fluide et une architecture facilement maintenable.',

    learnings: ['GraphQL', 'Sequelize', 'PostgreSQL', 'Architecture API'],

    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Sequelize'],
  },

  {
    id: 'ged',

    title: "Évolution d'une plateforme de Gestion Électronique de Documents",

    project: 'Gestion Documentaire',

    challenge:
      'Faire évoluer une plateforme documentaire manipulant plusieurs millions de documents tout en conservant des performances élevées et une forte stabilité.',

    solution:
      "Développement de nouvelles fonctionnalités AngularJS, création d'une interface de visualisation des dossiers, amélioration des traitements Node.js, optimisation des requêtes CMIS et maintenance continue de la plateforme.",

    result:
      "Une plateforme plus stable, plus performante et plus simple à maintenir, utilisée quotidiennement pour l'archivage, la consultation et le suivi documentaire.",

    highlight:
      "Participation à une plateforme documentaire d'entreprise manipulant un volume très important de documents.",

    learnings: [
      'AngularJS',
      'CMIS',
      'PostgreSQL',
      'Architecture documentaire',
      'Maintenance évolutive',
    ],

    technologies: ['AngularJS', 'Angular', 'Node.js', 'PostgreSQL', 'CMIS'],
  },

  {
    id: 'accounting',

    title: 'Évolution de Numen Expert',

    project: 'Gestion Comptable',

    challenge:
      'Faire évoluer une application métier complexe composée de plusieurs interfaces tout en garantissant la continuité des traitements comptables.',

    solution:
      'Développement de nouvelles fonctionnalités, maintenance corrective et évolutive, optimisation des traitements Node.js, amélioration des interfaces AngularJS et participation aux migrations de données entre les environnements France et Madagascar.',

    result:
      "Amélioration de la stabilité, des performances et de la maintenabilité de l'application.",

    highlight:
      "Participation au développement d'une plateforme métier utilisée quotidiennement par les équipes comptables.",

    learnings: ['Architecture métier', 'CMIS', 'PostgreSQL', 'Maintenance', 'Agile Scrum'],

    technologies: ['AngularJS', 'Angular', 'Node.js', 'PostgreSQL', 'CMIS', 'Java'],
  },

  {
    id: 'frontend',

    title: "Création d'une architecture React réutilisable",

    project: 'Plusieurs projets',

    challenge:
      'Plusieurs projets nécessitaient des composants similaires, entraînant de la duplication et un coût de maintenance élevé.',

    solution:
      "Mise en place de composants React réutilisables, standardisation des interfaces, amélioration de l'accessibilité et optimisation des performances de rendu.",

    result:
      'Réduction du temps de développement des nouveaux écrans et amélioration de la qualité globale des applications.',

    learnings: ['React', 'Design System', 'Responsive Design', 'Accessibilité'],

    technologies: ['React', 'Material UI', 'Tailwind CSS', 'TypeScript'],
  },
];
