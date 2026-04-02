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

export type ProjectCategory = {
  id: string
  label: string
}

export type Talk = {
  title: string
  event: string
  year: string
  description: string
  links?: { label: string, url: string }[]
}

export type Activity = {
  title: string
  organization: string
  description: string
  links?: { label: string, url: string }[]
}

export const profile = {
  email: 'rfcamacho@up.edu.ph',
  github: 'https://github.com/chry607',
  linkedin: 'https://www.linkedin.com/in/reuter-jan-camacho/',
  resumeSwe: '/resume/swe-resume.pdf',
  resumeDataAi: '/resume/data-ai-resume.pdf'
}

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

export const talks: Talk[] = [
  {
    title: 'Shipping ML Projects Beyond Jupyter',
    event: 'Campus AI Builders Seminar',
    year: '2025',
    description: 'Shared practical lessons on model reproducibility, deployment constraints, and experiment tracking.'
  },
  {
    title: 'Fast Problem Solving for ICPC-Style Contests',
    event: 'University Coding Bootcamp',
    year: '2024',
    description: 'Walked through graph and DP tactics used in competitive programming rounds.'
  }
]

export const activities: Activity[] = [
  {
    title: 'Competitive Programming Team',
    organization: 'University ICPC Chapter',
    description: 'Competed in regional rounds, mentored juniors, and built a weekly problem-solving practice set.'
  },
  {
    title: 'Data Science Society',
    organization: 'Campus Organization',
    description: 'Led mini-workshops on model evaluation and collaborated on social-impact analytics projects.',
    links: [
      { label: 'Website', url: 'https://www.facebook.com' }
    ]
  }
]
