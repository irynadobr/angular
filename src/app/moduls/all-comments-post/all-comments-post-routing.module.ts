import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsResolveService} from 'src/app/services';
import {CommentsComponent, PostsComponent} from '../all-comments-post';

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostsResolveService},
    children: [{path: ':id', component: CommentsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCommentsPostRoutingModule {
}
