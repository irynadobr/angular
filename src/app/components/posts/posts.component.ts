import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from 'src/app/models';
import {PostService} from 'src/app/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: Post [];

  // constructor(private postService: PostService) {
  // }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.xxx)
  }

  ngOnInit(): void {
    // this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
