import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url ='https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient) {

  }
  getUsers():Observable<User[]>{
  return this.httpClient.get<User[]>(this.url);
  }

  getUser(id:number):Observable<User>{
  return this.httpClient.get<User>(this.url+'/'+`${id}`)
  }
}
