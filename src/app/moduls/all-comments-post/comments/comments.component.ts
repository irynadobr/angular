import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from 'src/app/services';
import {Comment} from 'src/app/models';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: Comment [];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getComentsPost(value.id).subscribe(allCommentsPost => this.comments = allCommentsPost)
    })
  }
}
