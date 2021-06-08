import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {
  }

  getComment(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url)
  }

  getComentsPost(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
}

