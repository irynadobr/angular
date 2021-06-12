import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllPostsUserRoutingModule} from './all-posts-user-routing.module';
import {PostService, UsersResolveService} from 'src/app/services';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent, PostsComponent, UserComponent, UsersComponent} from '../all-posts-user';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AllPostsUserRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    UsersResolveService
  ]
})
export class AllPostsUserModule {
}
