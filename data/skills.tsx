import { Skill } from '@/models/skill';

const WEB_SKILLS = {
  JS: {
    name: {
      fr: 'JS',
      en: 'JS',
      es: 'JS',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  HTML: {
    name: {
      fr: 'HTML',
      en: 'HTML',
      es: 'HTML',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  SCSS: {
    name: {
      fr: 'SCSS',
      en: 'SCSS',
      es: 'SCSS',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  TS: {
    name: {
      fr: 'TS',
      en: 'TS',
      es: 'TS',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  LARAVEL: {
    name: {
      fr: 'Laravel',
      en: 'Laravel',
      es: 'Laravel',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  PHP: {
    name: {
      fr: 'PHP',
      en: 'PHP',
      es: 'PHP',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  ANGULAR: {
    name: {
      fr: 'Angular',
      en: 'Angular',
      es: 'Angular',
    },
    level: 'advanced',
    mainCategory: 'web',
  },
  SYMFONY: {
    name: {
      fr: 'Symfony',
      en: 'Symfony',
      es: 'Symfony',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  NODE_JS: {
    name: {
      fr: 'Node.js',
      en: 'Node.js',
      es: 'Node.js',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  NEXT_JS: {
    name: {
      fr: 'Next.js',
      en: 'Next.js',
      es: 'Next.js',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  REACT: {
    name: {
      fr: 'React',
      en: 'React',
      es: 'React',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  API_PLATFORM: {
    name: {
      fr: 'API Platform',
      en: 'API Platform',
      es: 'API Platform',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  EXPRESS: {
    name: {
      fr: 'Express',
      en: 'Express',
      es: 'Express',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  VUE_JS: {
    name: {
      fr: 'Vue.js',
      en: 'Vue.js',
      es: 'Vue.js',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  SOCKET_IO: {
    name: {
      fr: 'Socket.io',
      en: 'Socket.io',
      es: 'Socket.io',
    },
    level: 'intermediate',
    mainCategory: 'web',
  },
  C_SHARP: {
    name: {
      fr: 'C#',
      en: 'C#',
      es: 'C#',
    },
    level: 'knowledge',
    mainCategory: 'web',
  },
  GO: {
    name: {
      fr: 'Go',
      en: 'Go',
      es: 'Go',
    },
    level: 'knowledge',
    mainCategory: 'web',
  },
  JAVA: {
    name: {
      fr: 'Java',
      en: 'Java',
      es: 'Java',
    },
    level: 'knowledge',
    mainCategory: 'web',
  },
} satisfies Record<string, Skill>;

const MOBILE_SKILLS = {
  FLUTTER: {
    name: {
      fr: 'Flutter',
      en: 'Flutter',
      es: 'Flutter',
    },
    level: 'intermediate',
    mainCategory: 'mobile',
  },
  KOTLIN: {
    name: {
      fr: 'Kotlin',
      en: 'Kotlin',
      es: 'Kotlin',
    },
    level: 'knowledge',
    mainCategory: 'mobile',
  },
  SWIFT: {
    name: {
      fr: 'Swift',
      en: 'Swift',
      es: 'Swift',
    },
    level: 'knowledge',
    mainCategory: 'mobile',
  },
  DART: {
    name: {
      fr: 'Dart',
      en: 'Dart',
      es: 'Dart',
    },
    level: 'knowledge',
    mainCategory: 'mobile',
  },
} satisfies Record<string, Skill>;

const DATABASE_SKILLS = {
  MYSQL: {
    name: {
      fr: 'MySQL',
      en: 'MySQL',
      es: 'MySQL',
    },
    level: 'advanced',
    mainCategory: 'database',
  },
  PGSQL: {
    name: {
      fr: 'PostgreSQL',
      en: 'PostgreSQL',
      es: 'PostgreSQL',
    },
    level: 'advanced',
    mainCategory: 'database',
  },
  REDIS: {
    name: {
      fr: 'Redis',
      en: 'Redis',
      es: 'Redis',
    },
    level: 'advanced',
    mainCategory: 'database',
  },
  MONGODB: {
    name: {
      fr: 'MongoDB',
      en: 'MongoDB',
      es: 'MongoDB',
    },
    level: 'intermediate',
    mainCategory: 'database',
  },
  ELASTICSEARCH: {
    name: {
      fr: 'ElasticSearch',
      en: 'ElasticSearch',
      es: 'ElasticSearch',
    },
    level: 'intermediate',
    mainCategory: 'database',
  },
  ORACLE: {
    name: {
      fr: 'Oracle',
      en: 'Oracle',
      es: 'Oracle',
    },
    level: 'intermediate',
    mainCategory: 'database',
  },
  PL_SQL: {
    name: {
      fr: 'PL/SQL',
      en: 'PL/SQL',
      es: 'PL/SQL',
    },
    level: 'intermediate',
    mainCategory: 'database',
  },
  S3: {
    name: {
      fr: 'S3',
      en: 'S3',
      es: 'S3',
    },
    level: 'intermediate',
    mainCategory: 'database',
  },
} satisfies Record<string, Skill>;

const OTHER_SKILLS = {
  DOCKER: {
    name: {
      fr: 'Docker',
      en: 'Docker',
      es: 'Docker',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  GIT: {
    name: {
      fr: 'Git',
      en: 'Git',
      es: 'Git',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  CI_CD: {
    name: {
      fr: 'CI/CD',
      en: 'CI/CD',
      es: 'CI/CD',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  UML: {
    name: {
      fr: 'UML',
      en: 'UML',
      es: 'UML',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  TDD: {
    name: {
      fr: 'TDD',
      en: 'TDD',
      es: 'TDD',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  RESTFUL: {
    name: {
      fr: 'RESTful',
      en: 'RESTful',
      es: 'RESTful',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  TRELLO: {
    name: {
      fr: 'Trello',
      en: 'Trello',
      es: 'Trello',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  RGPD: {
    name: {
      fr: 'RGPD',
      en: 'GDPR',
      es: 'RGPD',
    },
    level: 'advanced',
    mainCategory: 'other',
  },
  FIGMA: {
    name: {
      fr: 'Figma',
      en: 'Figma',
      es: 'Figma',
    },
    level: 'intermediate',
    mainCategory: 'other',
  },
  KANBAN: {
    name: {
      fr: 'Kanban',
      en: 'Kanban',
      es: 'Kanban',
    },
    level: 'intermediate',
    mainCategory: 'other',
  },
  AI_INTEGRATION: {
    name: {
      fr: "Intégration d'IA",
      en: 'AI Integration',
      es: 'Integración de IA',
    },
    level: 'intermediate',
    mainCategory: 'other',
  },
  JIRA: {
    name: {
      fr: 'Jira',
      en: 'Jira',
      es: 'Jira',
    },
    level: 'intermediate',
    mainCategory: 'other',
  },
  SCRUM: {
    name: {
      fr: 'SCRUM',
      en: 'SCRUM',
      es: 'SCRUM',
    },
    level: 'intermediate',
    mainCategory: 'other',
  },
  KUBERNETES: {
    name: {
      fr: 'Kubernetes',
      en: 'Kubernetes',
      es: 'Kubernetes',
    },
    level: 'knowledge',
    mainCategory: 'other',
  },
  TERRAFORM: {
    name: {
      fr: 'Terraform',
      en: 'Terraform',
      es: 'Terraform',
    },
    level: 'knowledge',
    mainCategory: 'other',
  },
  GITHUB_ACTIONS: {
    name: {
      fr: 'GitHub Actions',
      en: 'GitHub Actions',
      es: 'GitHub Actions',
    },
    level: 'knowledge',
    mainCategory: 'other',
  },
} satisfies Record<string, Skill>;

const SKILLS_MAP = {
  ...WEB_SKILLS,
  ...MOBILE_SKILLS,
  ...DATABASE_SKILLS,
  ...OTHER_SKILLS,
};

export type SkillId = keyof typeof SKILLS_MAP;
export const SKILLS: Record<SkillId, Skill> = SKILLS_MAP;