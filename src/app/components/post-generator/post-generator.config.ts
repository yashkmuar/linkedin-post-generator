import {
    BrandConfig,
    FeatureCard,
    FloatingCard,
    GeneratorField,
    HeroConfig,
    NavLink,
    VisualAssets
} from './post-generator.model';

export const BRAND_CONFIG: BrandConfig = {
    name: 'PostCraft AI',
    badge: 'AI Linkedin Writer'
};

export const VISUAL_ASSETS : VisualAssets = {
    heroImage: '/images/ai-hero-character.png',
    dashboardPreview: '/images/post-preview-dashboard.png',
    agentCards: '/images/agent-cards-cluster.png',
    heroBackground: '/images/hero-gradient-bg.png'
}


export const HERO_CONFIG: HeroConfig = {
  eyebrow: 'AI-powered LinkedIn writing assistant',
  titleStart: 'Create better',
  titleHighlight: 'LinkedIn posts',
  titleEnd: 'with agentic AI.',
  subtitle:
    'Turn rough ideas into polished professional posts using a LangChain-powered strategy, writer, and editor workflow.',
  primaryCta: 'Start writing',
  secondaryCta: 'View workflow',
  imageSrc: VISUAL_ASSETS.heroImage
};


export const NAV_LINKS: NavLink[] = [
    {
        label: 'How it works',
        href: '#workflow'
    },
    {
        label: 'Generator',
        href: '#generator'
    },
    {
        label: 'Tech Stack',
        href: '#stack'
    }
];

export const TONE_OPTIONS: string[] = [
    'Professional',
    'Gen-Z',
    'Founder',
    'Corporate',
    'Motivational'
];

export const LENGTH_OPTIONS: string[] = [
  'Short',
  'Medium',
  'Long'
];

export const GENERATOR_FIELDS: GeneratorField[] = [
    {
        key: 'topic',
        label: 'Topic',
        type:'textarea',
        placeholder: 'Example: What I learned while deploying a FASTAPI App to Azure',
        required: true,
        maxLength: 300
    },
    
 {
    key: 'audience',
    label: 'Audience',
    type: 'text',
    placeholder: 'Example: Software developers, cloud engineers, students',
    required: true,
    maxLength: 140
  },
  {
    key: 'tone',
    label: 'Tone',
    type: 'select',
    options: TONE_OPTIONS
  },
  {
    key: 'length',
    label: 'Length',
    type: 'select',
    options: LENGTH_OPTIONS
  }
];


export const SAMPLE_TOPICS: string[] = [
  'What I learned while deploying a FastAPI app to Azure',
  'How LangChain improved my AI project workflow',
  'Lessons from building a full-stack AI portfolio project'
];


export const FEATURES: FeatureCard[] = [
  {
    icon: '🧠',
    title: 'Strategy Agent',
    description: 'Plans the angle, hook, structure, and CTA before writing.'
  },
  {
    icon: '✍️',
    title: 'Writer Agent',
    description: 'Turns your idea into a structured LinkedIn draft.'
  },
  {
    icon: '✨',
    title: 'Editor Agent',
    description: 'Polishes clarity, flow, readability, and engagement.'
  }
];

export const TECH_STACK: string[] = [
  'Angular',
  'FastAPI',
  'LangChain',
  'Azure OpenAI',
  'Azure Container Apps'
];

export const FLOATING_CARDS: FloatingCard[] = [
  {
    label: 'Agent flow',
    value: '3-step generation',
    accent: 'violet'
  },
  {
    label: 'Output',
    value: 'LinkedIn-ready post',
    accent: 'pink'
  },
  {
    label: 'Cloud',
    value: 'Deployed on Azure',
    accent: 'cyan'
  }
];

