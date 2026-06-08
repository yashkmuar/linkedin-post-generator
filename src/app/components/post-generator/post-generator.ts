import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../services/post';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-post-generator',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule],
  templateUrl: './post-generator.html',
  styleUrl: './post-generator.css',
})
export class PostGenerator {
  private cdr = inject(ChangeDetectorRef);
  private postService = inject(Post);

  isLoading = false;

  topic = '';
  audience = '';

  tone = 'Professional';
  length = 'Medium';

  generatedPost = '';

  generatePost() {

    this.isLoading = true;
    this.postService.generatePost({
      topic: this.topic,
      tone: this.tone,
      audience: this.audience,
      length: this.length
    }).subscribe(response => {

      this.generatedPost = response.post;
      this.isLoading = false;

      this.cdr.detectChanges();

      
    },
    error => {
      console.error(error);

      this.generatedPost = 'Something went wrong.';
      this.isLoading = false;
    }
    );
  }

}
