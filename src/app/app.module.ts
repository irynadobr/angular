import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from '@angular/router';
import {CommentsResolveService, PostsResolveService, UsersResolveService} from './services';
import {AppComponent, HomeComponent} from './components';

let routes: Routes = [{
  path: '',
  component: HomeComponent, children: [
    {
      path: 'allPostsUser',
      loadChildren: () => import('./moduls/all-posts-user/all-posts-user.module').then(value => value.AllPostsUserModule)
    },
    {
      path: 'allCommentsPost',
      loadChildren: () => import('./moduls/all-comments-post/all-comments-post.module').then(value => value.AllCommentsPostModule)
    }
  ]
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
