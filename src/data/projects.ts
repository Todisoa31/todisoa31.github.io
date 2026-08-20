import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'cee',

    title: "Plateforme de gestion des Certificats d'Économies d'Énergie",

    company: 'Freelance - Mada ITLab',

    sector: 'Énergie • Transition énergétique',

    period: "Mars 2025 - Aujourd'hui",

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Next.js', 'JavaScript', 'Git', 'Responsive Design'],

    shortDescription:
      "Développement d'une plateforme permettant la gestion complète des dossiers CEE pour plusieurs secteurs d'activité.",

    overview:
      "Participation au développement d'une plateforme destinée au traitement des Certificats d'Économies d'Énergie (CEE). L'application permet la création, la gestion et le suivi de milliers de dossiers répartis selon des secteurs tels que le résidentiel, l'agricole ou le tertiaire.",

    challenge:
      'Créer une interface capable de gérer des workflows complexes, des formulaires dynamiques et une volumétrie importante de données tout en garantissant une navigation rapide et intuitive.',

    solution:
      "Développement de composants React réutilisables, mise en place d'interfaces dynamiques avec Next.js et collaboration étroite avec l'équipe backend afin d'assurer la cohérence des échanges de données.",

    result:
      "Livraison d'une plateforme performante, ergonomique et évolutive facilitant le traitement quotidien des dossiers CEE.",

    responsibilities: [
      'Développement Frontend React',
      'Développement Next.js',
      'Création de composants réutilisables',
      'Gestion des formulaires dynamiques',
      'Optimisation UX',
      'Responsive Design',
      'Collaboration avec les développeurs Backend',
      'Participation aux revues de code',
    ],

    team: 'Équipe Frontend & Backend',

    impact: 'Amélioration de la fluidité de navigation et de la productivité des utilisateurs.',

    screenshots: [],

    featured: true,
  },

  {
    id: 'assurance',

    title: 'Plateforme de gestion Assurance & Réassurance',

    company: 'Indépendant',

    sector: 'Assurance • Réassurance',

    period: 'Novembre 2024 - Février 2025',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'TypeScript', 'ARIA'],

    shortDescription: "Modernisation d'une plateforme métier dédiée au secteur de l'assurance.",

    overview:
      "Intervention sur une application existante afin d'améliorer les performances backend, moderniser l'interface utilisateur et optimiser l'accessibilité.",

    challenge:
      'Optimiser une application manipulant un volume important de données sans impacter les fonctionnalités existantes.',

    solution:
      "Optimisation des requêtes MongoDB, développement de scripts Node.js pour les migrations de données, refonte des composants React et amélioration de l'accessibilité (ARIA).",

    result:
      "Réduction de près de 40 % du temps de réponse des traitements et amélioration significative de l'expérience utilisateur.",

    responsibilities: [
      'Optimisation MongoDB',
      'Scripts Node.js',
      'Migration de données',
      'Refonte React',
      'Création de nouveaux écrans',
      'Responsive Design',
      'Accessibilité ARIA',
      'Correction de bugs',
    ],

    team: 'Développeurs Frontend & Backend',

    impact: "Jusqu'à 40 % de réduction des temps de réponse.",

    screenshots: [],

    featured: true,
  },

  {
    id: 'ong',

    title: "Plateforme de gestion d'une ONG",

    company: 'Indépendant',

    sector: 'ONG • Développement communautaire',

    period: 'Avril 2020 - Novembre 2021',

    status: 'Public',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'TypeScript', 'Sequelize'],

    shortDescription:
      "Développement complet d'une plateforme destinée à promouvoir les activités d'une ONG et faciliter les dons.",

    overview:
      "Conception et réalisation d'une plateforme permettant de présenter les projets de l'organisation, de communiquer avec les donateurs et de centraliser les informations relatives aux actions menées.",

    challenge:
      'Créer une application simple à administrer tout en offrant une expérience utilisateur moderne.',

    solution:
      'Développement Fullstack en autonomie avec React, Node.js et Sequelize, en étroite collaboration avec le client.',

    result: "Une plateforme améliorant la visibilité de l'ONG et facilitant les campagnes de dons.",

    responsibilities: [
      'Analyse des besoins',
      'Conception',
      'Développement Frontend',
      'Développement Backend',
      'Architecture de la base de données',
      'Tests',
      'Déploiement',
    ],

    team: 'Développement en autonomie',

    impact: "Digitalisation des activités de l'organisation.",

    screenshots: [],
  },

  {
    id: 'equipment-rental',

    title: "Plateforme de location d'engins",

    company: 'Indépendant',

    sector: "Location d'engins",

    period: '2018 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Sequelize', 'TypeScript'],

    shortDescription:
      "Développement d'une plateforme de gestion et de réservation d'engins de chantier.",

    overview:
      "Participation au développement d'une application permettant la consultation, la réservation et la gestion d'un parc d'engins destinés aux professionnels et particuliers.",

    challenge:
      'Concevoir une plateforme capable de gérer les disponibilités des engins, les réservations et les informations des clients tout en garantissant une expérience utilisateur fluide.',

    solution:
      'Développement des interfaces React, création des API Node.js, utilisation de GraphQL pour optimiser les échanges entre le frontend et le backend et modélisation de la base de données avec PostgreSQL et Sequelize.',

    result:
      'Une plateforme facilitant la gestion des réservations et améliorant le suivi des équipements disponibles.',

    responsibilities: [
      'Développement React',
      'Développement Node.js',
      'API GraphQL',
      'Modélisation PostgreSQL',
      'Sequelize ORM',
      'Développement de nouvelles fonctionnalités',
      'Correction de bugs',
      'Tests',
    ],

    team: 'Équipe Fullstack',

    impact: 'Digitalisation du processus de réservation des engins.',

    screenshots: [],
  },

  {
    id: 'ecommerce',

    title: 'Plateforme E-commerce',

    company: 'Indépendant',

    sector: 'E-commerce',

    period: '2018 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Sequelize', 'TypeScript'],

    shortDescription:
      "Développement d'une plateforme de vente en ligne avec gestion des produits, commandes et paiements.",

    overview:
      "Participation au développement complet d'une plateforme e-commerce permettant aux utilisateurs de parcourir un catalogue de produits, gérer leur panier et passer leurs commandes.",

    challenge:
      'Créer une application rapide, intuitive et évolutive tout en assurant la gestion de plusieurs milliers de produits.',

    solution:
      'Développement du frontend React, des API Node.js, utilisation de GraphQL pour les échanges de données et PostgreSQL avec Sequelize pour la gestion des données.',

    result:
      'Une plateforme performante offrant une expérience utilisateur fluide et une navigation optimisée.',

    responsibilities: [
      'Développement React',
      'Développement Node.js',
      'GraphQL',
      'Sequelize',
      'PostgreSQL',
      'Gestion du panier',
      'Catalogue produits',
      'Maintenance',
    ],

    team: 'Équipe Fullstack',

    impact: "Amélioration de l'expérience utilisateur et optimisation des performances.",

    screenshots: [],
  },

  {
    id: 'shopify',

    title: "Optimisation d'une boutique Shopify",

    company: 'Indépendant',

    sector: 'E-commerce',

    period: '2019 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['Shopify', 'JavaScript', 'Liquid', 'HTML', 'CSS'],

    shortDescription:
      "Optimisation des performances d'une boutique Shopify afin d'améliorer les temps de chargement et l'expérience utilisateur.",

    overview:
      "Intervention sur une boutique Shopify existante présentant des temps de chargement élevés impactant l'expérience utilisateur et le référencement naturel.",

    challenge:
      "Identifier les causes des ralentissements tout en conservant l'ensemble des fonctionnalités de la boutique.",

    solution:
      'Audit des performances, suppression des scripts JavaScript inutiles, optimisation du chargement des images, réduction des ressources bloquantes, amélioration du thème Shopify et optimisation du chargement des assets.',

    result:
      'Réduction significative du temps de chargement des pages, amélioration des scores Lighthouse et meilleure expérience utilisateur.',

    responsibilities: [
      'Audit de performance',
      'Optimisation JavaScript',
      'Optimisation des images',
      'Optimisation du thème Shopify',
      'Réduction des ressources bloquantes',
      'Amélioration du SEO technique',
    ],

    team: 'Développement Frontend',

    impact: 'Amélioration des performances de la boutique et du référencement naturel.',

    screenshots: [],
  },

  {
    id: 'ged',

    title: 'Plateforme de Gestion Électronique de Documents (GED)',

    company: 'NUMEN Madagascar',

    sector: 'Gestion documentaire • Archivage numérique',

    period: 'Décembre 2021 - Novembre 2024',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: [
      'Angular',
      'AngularJS',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'PostgreSQL',
      'CMIS',
      'Java',
      'GitLab',
    ],

    shortDescription:
      "Plateforme de Gestion Électronique de Documents permettant l'archivage, le traitement, la consultation et le suivi de millions de documents.",

    overview:
      "Participation au développement et à la maintenance d'une plateforme GED utilisée pour centraliser, indexer, rechercher et consulter des documents provenant de différents processus métier. L'application était composée de deux interfaces principales : une interface dédiée au traitement documentaire et une seconde interface destinée à la visualisation, à la consultation et au suivi des dossiers.",

    challenge:
      'Faire évoluer une application documentaire manipulant plusieurs millions de documents tout en garantissant sa stabilité, ses performances et la compatibilité avec les processus métier existants.',

    solution:
      "Développement de nouvelles fonctionnalités sur AngularJS et Angular, création d'une nouvelle interface de visualisation documentaire, amélioration des traitements Node.js, maintenance corrective et évolutive, optimisation des traitements backend et participation aux évolutions de l'architecture documentaire reposant sur PostgreSQL et CMIS.",

    result:
      'Une plateforme documentaire plus performante, plus ergonomique et plus simple à maintenir, facilitant aussi bien le traitement que la consultation des documents pour les équipes métier.',

    responsibilities: [
      'Développement AngularJS et Angular',
      'Développement Backend Node.js',
      "Création d'une interface de visualisation documentaire",
      "Développement d'une interface de traitement documentaire",
      'Création de nouvelles fonctionnalités',
      'Maintenance corrective',
      'Maintenance évolutive',
      'Optimisation des traitements backend',
      "Correction d'incidents de production",
      'Participation aux revues de code',
      'Travail en méthodologie Agile Scrum',
    ],

    team: '3 développeurs, Project Manager, équipe Qualité et équipes métier',

    impact:
      "Amélioration des performances, de la stabilité et de l'expérience utilisateur d'une plateforme documentaire utilisée quotidiennement.",

    screenshots: [],

    featured: true,
  },

  {
    id: 'accounting',

    title: 'Numen Expert - Plateforme de Gestion Comptable',

    company: 'NUMEN Madagascar',

    sector: 'Comptabilité • Gestion financière',

    period: 'Décembre 2021 - Novembre 2024',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: [
      'Angular',
      'AngularJS',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'PostgreSQL',
      'CMIS',
      'Java',
      'GitLab',
    ],

    shortDescription:
      'Plateforme de gestion comptable permettant le traitement des dossiers clients, le suivi des opérations comptables et la collaboration entre les équipes métier.',

    overview:
      "Participation au développement et à la maintenance de Numen Expert, une application web de gestion comptable composée de deux interfaces complémentaires : une interface dédiée au traitement des données comptables et une seconde permettant le suivi des dossiers ainsi que la consultation des informations métier. Les données étaient stockées dans PostgreSQL et manipulées au travers d'une couche CMIS, avec certains traitements réalisés via des services Java.",

    challenge:
      "Prendre en main une application métier développée depuis plusieurs années, reposant sur une architecture complexe, tout en assurant les évolutions fonctionnelles, la maintenance corrective et la résolution d'incidents critiques.",

    solution:
      "Développement de nouvelles fonctionnalités AngularJS, amélioration des interfaces existantes, maintenance backend Node.js, création de scripts de migration de données, analyse d'incidents de production et optimisation des traitements applicatifs.",

    result:
      "Évolution continue de la plateforme, amélioration de sa stabilité, résolution rapide d'incidents critiques et accompagnement des équipes métier dans leurs activités quotidiennes.",

    responsibilities: [
      'Développement AngularJS',
      'Développement Backend Node.js',
      'Développement de nouvelles fonctionnalités',
      'Maintenance corrective',
      'Maintenance évolutive',
      'Création de scripts Node.js',
      'Migration de données',
      'Optimisation des traitements',
      "Analyse d'incidents de production",
      'Correction de bugs',
      'Participation aux revues de code',
      'Travail en méthodologie Agile Scrum',
    ],

    team: '3 développeurs, Project Manager et équipes comptables',

    impact:
      "Contribution à la fiabilité d'une application métier utilisée quotidiennement par les équipes comptables.",

    screenshots: [],

    featured: true,
  },

  {
    id: 'data-migration',

    title: 'Migration de données France → Madagascar',

    company: 'NUMEN Madagascar',

    sector: 'Migration de données',

    period: '2023',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['Node.js', 'PostgreSQL', 'CMIS', 'JavaScript', 'GitLab'],

    shortDescription:
      "Développement d'un moteur de migration permettant de synchroniser les données entre les environnements France et Madagascar.",

    overview:
      "Participation à un projet de migration consistant à synchroniser des données entre une base de données située en France et un environnement hébergé à Madagascar. L'objectif était d'assurer une migration fiable tout en préservant l'intégrité des données existantes.",

    challenge:
      "Les principales difficultés provenaient de la qualité des données. Plusieurs enregistrements représentaient une même information métier mais avec des différences de format, de casse, d'espaces ou d'écriture pouvant entraîner des doublons.",

    solution:
      "Développement d'un script Node.js permettant d'extraire les données, de normaliser les valeurs, de détecter les doublons potentiels, de vérifier l'existence des enregistrements avant insertion et de valider la cohérence des données après migration.",

    result:
      "Migration réalisée avec succès sans perte d'information, avec validation des résultats par les équipes métier après contrôle des volumes et des données migrées.",

    responsibilities: [
      'Développement de scripts Node.js',
      'Extraction des données',
      'Transformation des données',
      'Normalisation des valeurs',
      'Détection des doublons',
      'Validation des données',
      'Migration PostgreSQL',
      'Contrôles de cohérence',
      'Collaboration avec les équipes métier',
    ],

    team: 'Développeurs France, développeurs Madagascar et équipes métier',

    impact:
      'Migration sécurisée garantissant la qualité et la cohérence des données entre les deux environnements.',

    screenshots: [],

    featured: true,
  },

  {
    id: 'fec-extractor',

    title: 'Intégration et évolution du FEC Extractor',

    company: 'NUMEN Madagascar',

    sector: 'Comptabilité • Import de données',

    period: '2023',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['Node.js', 'TypeScript', 'JavaScript', 'PostgreSQL', 'CMIS', 'GitLab'],

    shortDescription:
      "Finalisation et intégration d'un moteur d'import des Fichiers des Écritures Comptables (FEC) dans Numen Expert.",

    overview:
      "Le projet consistait à reprendre le développement d'un composant initié par un autre développeur afin de le finaliser et de l'intégrer dans la plateforme Numen Expert. Ce moteur permettait d'importer les Fichiers des Écritures Comptables (FEC), d'extraire les informations utiles et d'alimenter automatiquement les données comptables de l'application.",

    challenge:
      "Comprendre rapidement l'architecture d'un composant déjà existant, compléter les fonctionnalités manquantes, garantir la compatibilité avec Numen Expert et assurer la fiabilité des données importées.",

    solution:
      "Analyse du fonctionnement existant, poursuite du développement, amélioration des traitements d'import, intégration dans la plateforme Numen Expert et réalisation des tests fonctionnels avec les équipes métier.",

    result:
      "Le moteur a pu être intégré avec succès dans Numen Expert, facilitant l'import automatisé des données comptables et réduisant les traitements manuels des utilisateurs.",

    responsibilities: [
      'Analyse du code existant',
      'Finalisation du développement',
      'Intégration dans Numen Expert',
      'Import des FEC',
      'Extraction des données comptables',
      'Import du Plan Comptable Général',
      'Import des comptes auxiliaires',
      'Validation des données',
      'Correction des anomalies',
      'Tests fonctionnels',
    ],

    team: '3 développeurs et Project Manager',

    impact:
      "Automatisation du processus d'import des données comptables et amélioration de la productivité des équipes métier.",

    screenshots: [],
  },

  {
    id: 'frt-import',

    title: 'Dépôt massif des Fiches de Renseignement Technique (FRT)',

    company: 'NUMEN Madagascar',

    sector: 'Automatisation documentaire',

    period: '2024',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['Node.js', 'AngularJS', 'TypeScript', 'PostgreSQL', 'CMIS'],

    shortDescription:
      "Développement d'un module permettant l'import massif et l'enrichissement automatique des Fiches de Renseignement Technique.",

    overview:
      "Conception d'une fonctionnalité permettant de déposer plusieurs centaines de FRT simultanément. Chaque fichier était analysé, validé et utilisé pour enrichir automatiquement les métadonnées métier des dossiers.",

    challenge:
      'Garantir la qualité des données importées tout en assurant des traitements rapides sur de gros volumes.',

    solution:
      "Développement d'un moteur de validation, de parsing et d'enrichissement automatique des propriétés métier avec gestion détaillée des erreurs.",

    result:
      'Réduction importante des traitements manuels et amélioration de la qualité des données.',

    responsibilities: [
      'Développement Node.js',
      'Parsing',
      'Validation',
      'Import massif',
      'Gestion des erreurs',
      'Optimisation des traitements',
    ],

    team: 'Équipe Fullstack',

    impact: 'Automatisation complète du dépôt des FRT.',

    screenshots: [],
  },

  {
    id: 'balance-carree',

    title: 'Balance Carrée',

    company: 'NUMEN Madagascar',

    sector: 'Comptabilité',

    period: '2024',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['AngularJS', 'Node.js', 'PostgreSQL', 'CMIS'],

    shortDescription: "Développement d'un module de calcul de balance comptable.",

    overview:
      "Développement d'un écran permettant de générer automatiquement une balance carrée avec filtres, calculs et export.",

    challenge: "Traiter rapidement de grands volumes d'écritures comptables.",

    solution: "Optimisation des requêtes et développement d'un moteur de calcul côté backend.",

    result: 'Calcul rapide et fiable des balances comptables.',

    responsibilities: [
      'Développement AngularJS',
      'Développement Node.js',
      'Calcul comptable',
      'Export CSV',
      'Optimisation',
    ],

    team: 'Équipe Comptabilité',

    impact: 'Réduction du temps nécessaire à la génération des balances.',

    screenshots: [],
  },

  {
    id: 'workbatch',

    title: 'Optimisation du moteur WorkBatch',

    company: 'NUMEN Madagascar',

    sector: 'Traitement documentaire',

    period: '2023',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['Node.js', 'TypeScript', 'CMIS', 'PostgreSQL'],

    shortDescription: 'Optimisation du moteur de création et de traitement des WorkBatch.',

    overview:
      'Participation au développement des traitements permettant de créer automatiquement des lots documentaires destinés aux opérateurs.',

    challenge: 'Réduire le temps de création des lots et éviter les doublons.',

    solution: 'Optimisation des algorithmes de regroupement, de tri et de sélection des documents.',

    result: 'Traitements plus rapides et meilleure répartition des documents.',

    responsibilities: [
      'Node.js',
      'Optimisation',
      'Algorithmes',
      'Traitements batch',
      'Correction de bugs',
    ],

    team: 'Équipe GED',

    impact: 'Amélioration des performances des traitements documentaires.',

    screenshots: [],
  },

  {
    id: 'restaurant',

    title: 'Plateforme de Commande en Ligne',

    company: 'NOGAE Développement',

    sector: 'Restauration',

    period: '2018 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'JavaScript', 'TypeScript'],

    shortDescription: 'Application de commande en ligne avec suivi en temps réel des commandes.',

    overview:
      "Développement d'une plateforme permettant aux clients de consulter les menus, passer leurs commandes en ligne et suivre leur préparation jusqu'à la livraison.",

    challenge:
      'Créer une expérience utilisateur simple et rapide tout en assurant un suivi en temps réel des commandes.',

    solution:
      'Développement des modules de gestion des menus, commandes, notifications et suivi des statuts en temps réel.',

    result:
      'Une plateforme améliorant le parcours client et simplifiant la gestion des commandes pour le restaurant.',

    responsibilities: [
      'Développement Frontend React',
      'Développement Backend Node.js',
      'Gestion des commandes',
      'Gestion des menus',
      'Notifications',
      'Correction de bugs',
    ],

    team: 'Développeurs Frontend, Backend et Équipe Produit',

    impact: "Digitalisation du processus de commande et amélioration de l'expérience client.",

    screenshots: [],
  },

  {
    id: 'tourism',

    title: 'Guide Touristique Interactif',

    company: 'NOGAE Développement',

    sector: 'Tourisme',

    period: '2018 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'TypeScript', 'Sequelize'],

    shortDescription:
      'Application permettant aux voyageurs de localiser rapidement les services essentiels.',

    overview:
      "Développement d'une application web destinée aux touristes afin de localiser facilement les banques, hôpitaux et autres services indispensables grâce à une carte interactive.",

    challenge:
      'Permettre une recherche rapide et intuitive des services essentiels dans une ville inconnue.',

    solution:
      "Développement d'une carte interactive, ajout de filtres avancés et optimisation de la navigation.",

    result:
      "Une application facilitant les déplacements des touristes et l'accès aux services de proximité.",

    responsibilities: [
      'Développement React',
      'Développement Backend',
      'Intégration cartographique',
      'Développement des filtres',
      'Optimisation UX',
    ],

    team: 'Développeurs Frontend & Backend',

    impact: "Amélioration de l'accessibilité des services pour les voyageurs.",

    screenshots: [],
  },

  {
    id: 'event',

    title: 'Plateforme de réservation événementielle',

    company: 'NOGAE Développement',

    sector: 'Événementiel',

    period: '2018 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'GraphQL', 'TypeScript'],

    shortDescription:
      'Application de gestion des inscriptions et réservations pour un événement médical international.',

    overview:
      "Développement d'une plateforme permettant aux participants de s'inscrire à un congrès médical organisé en Guadeloupe, avec gestion des disponibilités et des réservations.",

    challenge:
      "Concevoir une plateforme capable de gérer plusieurs centaines d'inscriptions tout en simplifiant l'organisation de l'événement.",

    solution:
      "Développement d'un système complet de réservation avec gestion des places disponibles, notifications et suivi des inscriptions.",

    result:
      'Une plateforme facilitant le travail des organisateurs et offrant une expérience fluide aux participants.',

    responsibilities: [
      'Développement Frontend React',
      'Développement Backend Node.js',
      'API GraphQL',
      'Gestion des réservations',
      'Notifications',
      'Tests et correction de bugs',
    ],

    team: 'Équipe Frontend, Backend et Chef de projet',

    impact: 'Automatisation complète du processus de réservation.',

    screenshots: [],
  },

  {
    id: 'elearning',

    title: "Plateforme d'E-learning",

    company: 'NOGAE Développement',

    sector: 'Éducation',

    period: '2018 - 2020',

    status: 'NDA',

    thumbnail: '/images/software.jpg',

    technologies: ['React', 'Node.js', 'TypeScript'],

    shortDescription:
      'Plateforme de formation en ligne destinée aux étudiants et aux établissements scolaires.',

    overview:
      "Développement d'une application web permettant aux étudiants d'accéder à des contenus pédagogiques, de suivre leurs cours et de consulter leurs ressources en ligne.",

    challenge:
      "Créer une plateforme simple d'utilisation, rapide et accessible sur ordinateur comme sur mobile.",

    solution:
      "Conception d'une interface intuitive, développement des fonctionnalités pédagogiques et optimisation des performances de l'application.",

    result:
      "Une plateforme facilitant l'accès aux contenus pédagogiques et améliorant l'expérience des utilisateurs.",

    responsibilities: [
      'Analyse des besoins',
      'Développement React',
      'Développement Node.js',
      'Conception UI',
      'Optimisation des performances',
      'Maintenance corrective',
    ],

    team: 'Développeurs et Chef de projet',

    impact: "Digitalisation de l'accès aux ressources pédagogiques.",

    screenshots: [],
  },
];
