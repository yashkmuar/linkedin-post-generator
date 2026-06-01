import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../services/post';

@Component({
  selector: 'app-post-generator',
  imports: [FormsModule],
  templateUrl: './post-generator.html',
  styleUrl: './post-generator.css',
})
export class PostGenerator {

  private postService = inject(Post);

  topic = '';
  audience = '';

  tone = 'Professional';
  length = 'Medium';

  generatedPost = '';

  generatePost() {

    this.postService.generatePost({
      topic: this.topic,
      tone: this.tone,
      audience: this.audience,
      length: this.length
    }).subscribe(response => {
      this.generatedPost = response.post;
    });
  }

}
