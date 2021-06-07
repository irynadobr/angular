import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from 'src/app/models';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()
  commentDetails: Comment

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
        this.commentDetails = this.router.getCurrentNavigation()?.extras.state as Comment;
      }
    )
  }

  ngOnInit(): void {
  }
}
