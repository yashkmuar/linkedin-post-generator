import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../services/post';

@Component({
  selector: 'app-post-generator',
  standalone: true,
  imports: [FormsModule],
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
