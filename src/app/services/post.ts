import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GeneratePostRequest, GeneratePostResponse } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class Post {

  private http = inject(HttpClient);
  
  generatePost(payload: GeneratePostRequest): Observable<GeneratePostResponse>{
    return this.http.post<GeneratePostResponse>(
      'http://127.0.0.1:8000/api/posts/generate',
      payload
    );
  }
}
