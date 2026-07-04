import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Post } from '../../services/post';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { GeneratorField } from './post-generator.model';

import { 
BRAND_CONFIG,
  FEATURES,
  FLOATING_CARDS,
  GENERATOR_FIELDS,
  HERO_CONFIG,
  LENGTH_OPTIONS,
  NAV_LINKS,
  SAMPLE_TOPICS,
  TECH_STACK,
  TONE_OPTIONS,
  VISUAL_ASSETS
} from './post-generator.config'


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

  brand = BRAND_CONFIG;

  hero = HERO_CONFIG;

  visualAssets = VISUAL_ASSETS;

  navLinks = NAV_LINKS;
  toneOptions = TONE_OPTIONS;

  lengthOptions = LENGTH_OPTIONS;

  generatorFields = GENERATOR_FIELDS;

  sampleTopics = SAMPLE_TOPICS;

  features = FEATURES;

  techStack = TECH_STACK;

  floatingCards = FLOATING_CARDS;

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