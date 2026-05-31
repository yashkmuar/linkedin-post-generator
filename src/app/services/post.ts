import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Post {

  private http = inject(HttpClient);
  
  generatePost(payload: any){
    return this.http.post(
      'http://127.0.0.1:8000/api/posts/generate',
      payload
    );
  }
}
