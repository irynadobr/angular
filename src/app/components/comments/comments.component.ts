import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from 'src/app/services';
import {Comment} from 'src/app/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  id: number
  comments: Comment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getComentsPost(this.id).subscribe(value => this.comments = value)
  }

}

