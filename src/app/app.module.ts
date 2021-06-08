import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentDetailsComponent,
  CommentsComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';
import {RouterModule, Routes} from '@angular/router';

import {CommentsResolveService, PostsResolveService, UsersResolveService} from './services';


let routes: Routes = [{
  path: 'users',
  component: UsersComponent,
  resolve: {xxx: UsersResolveService},
  children: [{path: ':id', component: UserDetailsComponent}]
},
  {
    path: 'posts',
    component: PostsComponent,
    resolve: {xxx: PostsResolveService},
    children: [{path: ':id', component: PostDetailsComponent}]
  },
  {
    path: 'comments',
    component: CommentsComponent,
    resolve: {xxx: CommentsResolveService},
    children: [{path: ':id', component: CommentDetailsComponent}]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    CommentComponent,
    CommentsComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
