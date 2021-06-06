import {Component, Input, OnInit} from '@angular/core';
import {Post} from 'src/app/models';
import { PostService } from 'src/app/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input()
  post: Post
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

  }
}
