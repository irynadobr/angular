import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
users:User[]
  constructor(private activatedRoute:ActivatedRoute) {
  this.activatedRoute.data.subscribe(value=>this.users=value.users)
  }
 }
