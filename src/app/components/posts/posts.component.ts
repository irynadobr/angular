import {Component, Input, OnInit} from '@angular/core';
import {Post} from 'src/app/models';
import {PostService} from 'src/app/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  id: number;
  posts: Post [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPostsUser(this.id).subscribe(value => this.posts = value);
  }
}
