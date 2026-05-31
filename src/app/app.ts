import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Post } from './services/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private postService = inject(Post);
  
  topic = '';
  audience = '';

  tone = '';
  length = '';

  generatedPost = '';

  generatePost(){

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
