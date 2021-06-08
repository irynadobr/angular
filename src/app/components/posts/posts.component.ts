import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from 'src/app/models';
import {PostService} from 'src/app/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.xxx)
  }
}
