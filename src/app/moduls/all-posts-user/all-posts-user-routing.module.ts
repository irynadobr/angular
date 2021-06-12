import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersResolveService} from 'src/app/services';
import {PostsComponent, UsersComponent} from '../all-posts-user';

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UsersResolveService},
    children: [{path: ':id', component: PostsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPostsUserRoutingModule {
}
