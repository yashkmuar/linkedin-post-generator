export type FieldType = 'text' | 'textarea' | 'select';

export type GeneratorFieldKey = 'topic' | 'audience' | 'tone' | 'length';

export interface GeneratorField {
    key: GeneratorFieldKey;
    label: string;
    type: FieldType;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    options?: string[];
}

export interface NavLink {
    label: string;
    href: string;
}

export interface FeatureCard {
    icon: string;
    title: string;
    description: string;
}

export interface FloatingCard {
    label: string;
    value: string;
    accent: 'violet' | 'pink' | 'cyan' | 'orange';
}

export interface BrandConfig {
    name: string;
    badge: string;
}


export interface HeroConfig {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  imageSrc: string;
}

export interface VisualAssets {
    heroImage: string;
    dashboardPreview: string;
    agentCards: string;
    heroBackground: string;
}