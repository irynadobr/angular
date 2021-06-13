import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private url =`https://jsonplaceholder.typicode.com/posts`
  constructor(private  httpClient: HttpClient) {

  }
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
}
