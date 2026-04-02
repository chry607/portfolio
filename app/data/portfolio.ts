export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  impact: string
  category: string
  stack: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
}

export type Link = {
  label: string
  url: string
}

export type ProjectCategory = {
  id: string
  label: string
}

export type Talk = {
  title: string
  event: string
  date: string
  description: string
  highlights?: string[]
  links?: Link[]
}

export type Activity = {
  title: string
  organization: string
  period?: string
  description: string
  highlights?: string[]
  links?: Link[]
}

export type Experience = {
  role: string
  organization: string
  period: string
  location?: string
  description: string[]
  highlights?: string[]
  tech?: string[]
  links?: Link[]
}

export type Certification = {
  title: string
  issuer: string
  date: string
  credentialId?: string
  description?: string
  skills?: string[]
  links?: Link[]
}

export type FocusArea = {
  title: string
  subtitle?: string
  items: string[]
}

export const profile = {
  email: 'rfcamacho@up.edu.ph',
  github: 'https://github.com/chry607',
  linkedin: 'https://www.linkedin.com/in/reuter-jan-camacho/',
  resumeSwe: '/resume/swe-resume.pdf',
  resumeDataAi: '/resume/data-ai-resume.pdf'
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Software Engineering',
    subtitle: 'Systems, architecture, product',
    items: [
      'Scalable APIs and backend architecture',
      'Frontend UX for data-heavy products',
      'Testing, observability, and performance'
    ]
  },
  {
    title: 'AI / ML',
    subtitle: 'From experiments to production',
    items: [
      'Training + evaluation workflows',
      'Model deployment and monitoring',
      'Data pipelines and feature work'
    ]
  },
  {
    title: 'Computational Science',
    subtitle: 'Beyond Computer Science',
    items: ['Quantum Computing', 'Bioinformatics', 'Quantitative Finance']
  }
]

export const stack = [
  'Python',
  'TypeScript',
  'C/C++',
  'PHP',
  'SQL',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Scikit-learn',
  'SciPy',
  'TensorFlow',
  'Keras',
  'Next.js',
  'Nuxt.js',
  'Tailwind CSS',
  'HTML/CSS',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'AWS',
  'DigitalOcean',
  'MongoDB',
  'Redis',
  'Github'
]

export const projectCategories: ProjectCategory[] = [
  { id: 'swe', label: 'Software Engineering' },
  { id: 'ai-ds', label: 'AI / Data Science' },
  { id: 'quant', label: 'Quant' },
  { id: 'research', label: 'Research' }
]

export const projects: Project[] = [
  {
    slug: 'petrification-risk-classifier',
    title: 'Petrification Risk Classifier',
    subtitle: 'Explainable vision model pipeline',
    description: 'Built an end-to-end model workflow with experiment tracking, interpretable outputs, and reproducible inference artifacts.',
    impact: '92.4% validation F1',
    category: 'ai-ds',
    stack: ['PyTorch', 'ML Ops', 'Computer Vision'],
    githubUrl: 'https://github.com/yourusername/petrification-risk-classifier',
    highlights: [
      'Implemented data versioning and augmentation strategy to reduce overfitting.',
      'Generated saliency and grad-CAM views for model interpretability.',
      'Packaged model with API endpoint and benchmarked latency for edge deployment.'
    ]
  },
  {
    slug: 'kingdom-logistics-os',
    title: 'Kingdom Logistics OS',
    subtitle: 'Operational dashboard for multi-team workflows',
    description: 'Designed and shipped a full-stack platform for inventory routing, live state updates, and role-based access for multiple operators.',
    impact: '38% faster order cycle',
    category: 'swe',
    stack: ['Nuxt', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/kingdom-logistics-os',
    liveUrl: 'https://logistics-demo.example.com',
    highlights: [
      'Built event-driven updates to maintain near realtime order visibility.',
      'Introduced RBAC policies and audited critical data actions.',
      'Created analytics views for bottleneck detection in logistics flow.'
    ]
  },
  {
    slug: 'sai-strategy-engine',
    title: 'Sai Strategy Engine',
    subtitle: 'Graph-based planning recommendation service',
    description: 'Created a decision engine using graph relationships and historical sprint data to suggest next-step execution plans.',
    impact: '24% better planning accuracy',
    category: 'research',
    stack: ['Graph Algorithms', 'FastAPI', 'Data Engineering'],
    githubUrl: 'https://github.com/yourusername/sai-strategy-engine',
    highlights: [
      'Modeled dependency graphs for tasks, teams, and blockers.',
      'Built recommendation scoring with interpretable confidence values.',
      'Deployed ETL jobs to refresh strategy inputs on a schedule.'
    ]
  }
]

export const experiences: Experience[] = [
  {
    role: 'Finance Head',
    organization: 'Association for Computing Machinery - UP Diliman Student Chapter',
    period: 'Present',
    location: 'Philippines',
    description: [
      'Standardized financial workflows improving reporting accuracy and transparency',
      'Managed budgeting and allocation across multiple projects',
      'Built a financial analytics platform centralizing multi-project budget tracking',
      'Developed SQL pipelines for historical vs. real-time data analysis',
      'Created visualization tools for structured budget insights'
    ]
  },
  {
    role: 'President',
    organization: 'Ateneo Senior High School Programming Varsity',
    period: 'August 2023 - May 2024',
    location: 'Philippines',
    description: [
      'Led the varsity programming team, setting training schedules, organizing events, and mentoring members.',
      'Served as team captain for competitive programming contests, coaching members in advanced algorithms and problem-solving strategies.',
      'Developed and taught advanced programming techniques, boosting team performance in regional and national competitions.'
    ]
  },
  {
    role: 'Senior Commissioner',
    organization: 'Ateneo Senior High School Commission on Elections',
    period: 'January 2024 - May 2024',
    location: 'Philippines',
    description: [
      'Automated the vote validation process prior to counting, improving accuracy and reducing manual errors.',
      'Streamlined election procedures through simple scripts and digital tools, ensuring efficient and transparent results.'
    ]
  }
]

export const certifications: Certification[] = [
  {
    title: 'Quantum Computing and Blockchain Lecture Series',
    issuer: 'Quantum Computing Society of the Philippines',
    date: '2025',
    description: 'Completed the Quantum Computing and Blockchain Lecture Series 2025.',
    links: [
      { label: 'Certificate', url: 'https://verified.sertifier.com/en/verify/11904129918788/' }
    ]
  },
  {
    title: 'Time Series | Intro to Deep Learning | Intro and Intermediate Machine Learning',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Completed the Time Series, Intro to Deep Learning, and Intro and Intermediate Machine Learning courses on Kaggle.',
    links: [
      { label: 'Time Series', url: 'https://www.kaggle.com/learn/certification/reuterjancamacho/time-series' },
      { label: 'Intro to Deep Learning', url: 'https://www.kaggle.com/learn/certification/reuterjancamacho/intro-to-deep-learning' },
      { label: 'Intermediate Machine Learning', url: 'https://www.kaggle.com/learn/certification/reuterjancamacho/intermediate-machine-learning' },
      { label: 'Intro to Machine Learning', url: 'https://www.kaggle.com/learn/certification/reuterjancamacho/intro-to-machine-learning' }
    ]
  }
]

export const talks: Talk[] = [
  {
    title: 'Pandora\'s Box',
    event: 'Bootcamp 12.0',
    date: '2025',
    description: 'Given a speech about the experiences in UPD BSCS, and how it differ from other universities.'
  },
  {
    title: 'Graph Theory in Research',
    event: 'NOVUS Competition',
    date: '2024',
    description: 'Given a speech about how programming helps student researchers analyze data gathered, leading to more accurate results'
  },
  {
    title: 'Google Apps Script for Google Sheets',
    event: 'Formula S',
    date: '2024',
    description: 'Gave a speech about how Google App Script and Javascript can extend the capabilities of Google Sheets, improving the experience while using the platform'
  }
]

export const activities: Activity[] = [
  {
    title: 'ICPC Manila Regional Round Participant',
    organization: 'International Collegiate Programming Contest | Ateneo de Manila University',
    period: 'December 2025',
    description: 'Competed in ICPC Manila Regional Round in 2025 in Ateneo de Manila University',
    links: [
      { label: 'Facebook', url: 'https://www.facebook.com/share/18TKgmio67' }
    ]
  },
  {
    title: 'NOI.PH Finalist',
    organization: 'NOI.PH | Ateneo de Manila University',
    period: '2024',
    description: 'One of the top 30 participants in NOI.PH 2024 National Eliminations',
    links: [
      { label: 'Website', url: 'https://noi.ph/2024-national-eliminations/' }
    ]
  },
  {
    title: 'Automation Competition – Participant',
    organization: 'Old St. Labs',
    period: '2025',
    description: 'Designed and implemented an automation solution, applying concepts in prompt engineering to solve business inefficiencies in their standard operating procedure'
  }
]
