import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Post } from './services/post';
import { PostGenerator } from "./components/post-generator/post-generator";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    PostGenerator
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



}
