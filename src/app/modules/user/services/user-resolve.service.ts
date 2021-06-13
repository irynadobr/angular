import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from 'src/app/models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve <User> {

  constructor(private userService:UserService) {
  }

  resolve(activatedRouteShapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        // @ts-ignore
    const userId = activatedRouteShapshot.params.id;
   return  this.userService.getUser(userId);

    }
}
