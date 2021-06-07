import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from 'src/app/services';
import {Comment} from 'src/app/models/Comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()

  comments: Comment[];

  // constructor(private commentService: CommentService) {
  // }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.comments = value.xxx)
  }

  ngOnInit(): void {
    // this.commentService.getComment().subscribe(value => this.comments = value)
  }

}

