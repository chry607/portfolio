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
    slug: 'athnest-platform',
    title: 'AthNest',
    subtitle: 'Automated programming classroom platform',
    description: 'Engineered a full-stack Codeforces-style system for automated grading, real-time feedback, and competitive programming workflows.',
    impact: '100% reduction in manual grading time',
    category: 'swe',
    stack: ['Next.js', 'Django', 'PostgreSQL', 'Docker', 'Redis', 'Celery'],
    // githubUrl: 'https://github.com/yourusername/athnest',
    highlights: [
      'Built scalable backend with Django, Redis, and Celery supporting 1000+ concurrent submissions.',
      'Designed containerized infrastructure with horizontal scaling on DigitalOcean.',
      'Developed interactive frontend with leaderboards, analytics, and real-time feedback.',
      'Integrated CI/CD pipelines for automated testing and deployment.'
    ]
  },
  {
    slug: 'gpu-backtesting-engine',
    title: 'GPU-Accelerated Backtesting Engine',
    subtitle: 'High-performance commodity trading simulation',
    description: 'Built a CUDA-powered backtesting engine for commodity trading strategies, enabling large-scale parameter sweeps and fast financial metric computation.',
    impact: 'Massive speedup vs CPU baselines',
    category: 'ai-ds',
    stack: ['C++', 'CUDA', 'Parallel Computing'],
    // githubUrl: 'https://github.com/yourusername/gpu-backtesting-engine',
    highlights: [
      'Parallelized thousands of strategy configurations using GPU kernels.',
      'Optimized memory access patterns and implemented parallel reductions.',
      'Computed key financial metrics including PnL, Sharpe ratio, and max drawdown efficiently.'
    ]
  },
  {
    slug: 'constellai-rag',
    title: 'ConstellAI',
    subtitle: 'Local research paper QA system (RAG)',
    description: 'Developed an end-to-end retrieval-augmented generation pipeline for querying local research papers with high factual accuracy.',
    impact: 'Accurate, hallucination-resistant QA',
    category: 'ai-ds',
    stack: ['Python', 'ChromaDB', 'sentence-transformers', 'Ollama', 'UMAP'],
    // githubUrl: 'https://github.com/yourusername/constellai',
    highlights: [
      'Built PDF ingestion pipeline with PyMuPDF and custom font-shift decoding.',
      'Generated semantic embeddings using BAAI/bge-small-en-v1.5 and implemented top-k retrieval.',
      'Ran Mistral locally via Ollama with strict source-grounded prompting.',
      'Visualized embedding space with UMAP to create a 2D knowledge graph of documents.'
    ]
  },
  {
    slug: 'up-acm-financial-dashboard',
    title: 'UP ACM Financial Dashboard',
    subtitle: 'Budget tracking and analytics platform',
    description: 'Created a financial dashboard for UP ACM to monitor multi-project budgets and expenditures with data-driven insights.',
    impact: 'Enabled org-wide financial visibility',
    category: 'swe',
    stack: ['SQL', 'React', 'shadcn/ui'],
    // githubUrl: 'https://github.com/yourusername/up-acm-dashboard',
    highlights: [
      'Designed SQL-backed aggregation for historical vs current spending analysis.',
      'Built interactive comparison views for project budgets.',
      'Enabled data-driven decision making for council operations.'
    ]
  },
  {
    slug: 'dryve-safe-flood-prediction',
    title: 'Dry-ve Safe Flood Prediction System',
    subtitle: 'Geospatial AI prediction platform',
    description: 'Developed backend services for an AI-powered flood prediction system using geospatial inputs and ML inference.',
    impact: 'Reliable geospatial prediction APIs',
    category: 'ai-ds',
    stack: ['Django', 'Django REST Framework'],
    // githubUrl: 'https://github.com/yourusername/dryve-safe',
    highlights: [
      'Implemented RESTful APIs for ML microservice integration.',
      'Handled validation, error management, and request orchestration.',
      'Designed scalable backend for geospatial prediction workflows.'
    ]
  },
  {
    slug: 'class-officer-sorting-system',
    title: 'Class Officer Sorting System',
    subtitle: 'Election data automation tool',
    description: 'Automated classification of election candidates from messy Google Sheets data for Ateneo SHS ComElec.',
    impact: 'Significantly reduced manual sorting effort',
    category: 'swe',
    stack: ['Google Apps Script', 'JavaScript'],
    // githubUrl: 'https://github.com/yourusername/class-officer-system',
    highlights: [
      'Parsed and cleaned raw spreadsheet data programmatically.',
      'Automated classification by section and position.',
      'Improved efficiency and accuracy of election processing.'
    ]
  },
  {
    slug: 'project-pip',
    title: 'Project PIP',
    subtitle: 'Campus plant information system',
    description: 'Built a dynamic website showcasing plant species across the Ateneo campus with a wiki-style interface.',
    impact: 'Interactive campus knowledge platform',
    category: 'swe',
    stack: ['JavaScript', 'Firebase', 'GCP'],
    // githubUrl: 'https://github.com/yourusername/project-pip',
    highlights: [
      'Designed database-backed content system for plant data.',
      'Developed dynamic frontend with vanilla JavaScript.',
      'Deployed using Firebase and Google Cloud Platform.'
    ]
  },
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    subtitle: 'High-performance developer portfolio',
    description: 'Designed and developed a modern, responsive portfolio to showcase projects, technical skills, and achievements with a focus on performance and clean UI/UX.',
    impact: 'Central hub for projects and recruiter visibility',
    category: 'swe',
    stack: ['Nuxt.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/chry607/portfolio',
    liveUrl: 'https://portfolio-reuters-projects.vercel.app/',
    highlights: [
      'Built with Nuxt.js for optimized performance and SEO.',
      'Designed responsive UI using Tailwind CSS with clean component structure.',
      'Structured project data dynamically for easy extensibility.',
      'Focused on accessibility, fast load times, and smooth user experience.'
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
