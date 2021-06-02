import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models';
import {CommentService} from '../../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  id: number;
  comments: Comment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getCommentsPost(this.id).subscribe(value => this.comments = value);
  }
}
