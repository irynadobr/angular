import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
user:User;
  constructor(private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
  }
  storeUser(){
    let currentStore=this.dataTransferService.store.getValue();
    currentStore.push(this.user);
    this.dataTransferService.store.next(currentStore)
  }

}
