import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Comment} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<Comment[]> {
  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comment[] | Observable<Comment[]> | Promise<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url)
  }
}
