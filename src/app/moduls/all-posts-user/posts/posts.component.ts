import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from 'src/app/models';
import {PostService} from 'src/app/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[]

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostsUser(value.id).subscribe(posts =>
        this.posts = posts);
    });
  }
}
