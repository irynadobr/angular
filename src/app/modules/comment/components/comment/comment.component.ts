import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
 comment:Comment
@Output()
  coomentLift=new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  choseComment(){
this.coomentLift.emit(this.comment)
  }
}
