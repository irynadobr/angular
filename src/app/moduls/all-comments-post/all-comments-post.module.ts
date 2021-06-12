import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllCommentsPostRoutingModule} from './all-comments-post-routing.module';
import {CommentService, PostsResolveService} from 'src/app/services';
import {HttpClientModule} from '@angular/common/http';
import {CommentComponent, CommentsComponent, PostComponent, PostsComponent} from '../all-comments-post';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    AllCommentsPostRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    PostsResolveService
  ]
})
export class AllCommentsPostModule {
}
