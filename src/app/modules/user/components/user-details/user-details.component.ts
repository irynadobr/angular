import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from 'src/app/models';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
details:User;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value=>this.details=value.user)
    }


  ngOnInit(): void {
  }

}
