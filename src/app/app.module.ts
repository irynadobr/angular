import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentsComponent,
  PostComponent,
  PostsComponent,
  UserComponent,
  UsersComponent
} from './components';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';

let routes:Routes =[{path:'users', component:UsersComponent,
  children:[
    {path:':id', component:UserDetailsComponent}
  ]
},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/:id', component: CommentDetailsComponent}]
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
