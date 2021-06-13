import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';
import { Comment } from 'src/app/models';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
 comments:Comment[]
  constructor(private httpClient:HttpClient, private dataTransferServise:DataTransferService) {
    console.log(this.dataTransferServise.store.getValue());
  }

  ngOnInit(): void {
    this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments').subscribe(value=>this.comments=value)
  }

}
