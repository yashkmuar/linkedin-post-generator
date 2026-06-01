import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Post } from './services/post';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private postService = inject(Post);
  
  topic = '';
  audience = '';

  tone = 'Professional';
  length = 'Medium';

  generatedPost = '';

  generatePost(){

    this.postService.generatePost({
      topic: this.topic,
      tone: this.tone,
      audience: this.audience,
      length: this.length
    }).subscribe(response => {
      console.log('API Response;', response);

      this.generatedPost = response.post;

      console.log('generatedPost:', this.generatedPost);
    });
  }

}
