import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GeneratePostRequest, GeneratePostResponse } from '../models/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Post {

  private http = inject(HttpClient);
  
  generatePost(payload: GeneratePostRequest): Observable<GeneratePostResponse>{
    return this.http.post<GeneratePostResponse>(
      `${environment.apiBaseUrl}/generate`,
      payload
    );
  }
}
