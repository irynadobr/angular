import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from '@angular/router';
import {AppComponent, HomeComponent} from './components';

let routes: Routes = [
     {
      path: 'users',
      loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)
    },
    {
      path: 'posts',
      loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)
    },
    {
      path: 'comments',
      loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)
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
