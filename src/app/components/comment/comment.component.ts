import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from 'src/app/models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment: Comment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  goToDetails(): void {
    this.router.navigate([this.comment.id], {relativeTo: this.activatedRoute, state: this.comment})
  }
}
