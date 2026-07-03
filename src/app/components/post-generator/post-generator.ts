import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Post } from '../../services/post';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

type FieldType = 'text' | 'textarea' | 'select';

interface GeneratorField {
  key: 'topic' | 'audience' | 'tone' | 'length';
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  options?: string[];
}

interface NavLink {
  label: string;
  href: string;
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface FloatingCard {
  label: string;
  value: string;
  accent: 'violet' | 'pink' | 'cyan' | 'orange';
}

@Component({
  selector: 'app-post-generator',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './post-generator.html',
  styleUrl: './post-generator.css',
})
export class PostGenerator {
  private cdr = inject(ChangeDetectorRef);
  private postService = inject(Post);

  // -----------------------------
  // Current form state
  // -----------------------------
  isLoading = false;

  topic = '';
  audience = '';

  tone = 'Professional';
  length = 'Medium';

  generatedPost = '';

  // -----------------------------
  // Premium UI configuration
  // Keep content here, not hardcoded in HTML
  // -----------------------------

  brand = {
    name: 'PostCraft AI',
    badge: 'AI LinkedIn Writer'
  };

  hero = {
  eyebrow: 'AI-powered LinkedIn writing assistant',
  titleStart: 'Create better',
  titleHighlight: 'LinkedIn posts',
  titleEnd: 'with agentic AI.',
  subtitle:
    'Turn rough ideas into polished professional posts using a LangChain-powered strategy, writer, and editor workflow.',
  primaryCta: 'Start writing',
  secondaryCta: 'View workflow',
  imageSrc: 'ai-hero-character.png'
};

  navLinks: NavLink[] = [
    {
      label: 'How it works',
      href: '#workflow'
    },
    {
      label: 'Generator',
      href: '#generator'
    },
    {
      label: 'Tech stack',
      href: '#stack'
    }
  ];

  toneOptions: string[] = [
    'Professional',
    'Gen-Z',
    'Founder',
    'Corporate',
    'Motivational'
  ];

  lengthOptions: string[] = [
    'Short',
    'Medium',
    'Long'
  ];

  generatorFields: GeneratorField[] = [
    {
      key: 'topic',
      label: 'Topic',
      type: 'textarea',
      placeholder: 'Example: What I learned while deploying a FastAPI app to Azure',
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
      options: this.toneOptions
    },
    {
      key: 'length',
      label: 'Length',
      type: 'select',
      options: this.lengthOptions
    }
  ];

  sampleTopics: string[] = [
    'What I learned while deploying a FastAPI app to Azure',
    'How LangChain improved my AI project workflow',
    'Lessons from building a full-stack AI portfolio project'
  ];

  features: FeatureCard[] = [
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

  techStack: string[] = [
    'Angular',
    'FastAPI',
    'LangChain',
    'Azure OpenAI',
    'Azure Container Apps'
  ];

  floatingCards: FloatingCard[] = [
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

  // -----------------------------
  // Helper methods for dynamic form
  // -----------------------------

  getFieldValue(key: GeneratorField['key']): string {
    switch (key) {
      case 'topic':
        return this.topic;
      case 'audience':
        return this.audience;
      case 'tone':
        return this.tone;
      case 'length':
        return this.length;
      default:
        return '';
    }
  }

  setFieldValue(key: GeneratorField['key'], value: string): void {
    switch (key) {
      case 'topic':
        this.topic = value;
        break;
      case 'audience':
        this.audience = value;
        break;
      case 'tone':
        this.tone = value;
        break;
      case 'length':
        this.length = value;
        break;
    }
  }

  useSampleTopic(selectedTopic: string): void {
    this.topic = selectedTopic;
  }

  scrollToGenerator(): void {
    const generatorSection = document.getElementById('generator');

    if (generatorSection) {
      generatorSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // -----------------------------
  // Existing API logic
  // -----------------------------

  generatePost(): void {
    if (!this.topic.trim() || !this.audience.trim()) {
      this.generatedPost = 'Please enter topic and audience.';
      return;
    }

    this.isLoading = true;
    this.generatedPost = '';

    this.postService.generatePost({
      topic: this.topic.trim(),
      tone: this.tone,
      audience: this.audience.trim(),
      length: this.length
    }).subscribe({
      next: (response) => {
        this.generatedPost = response.post;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
        this.generatedPost = 'Something went wrong. Please try again.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  copyPost(): void {
    if (!this.generatedPost) {
      return;
    }

    navigator.clipboard.writeText(this.generatedPost);
    alert('Copied!');
  }
}