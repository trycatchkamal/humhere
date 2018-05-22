import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn){
          this.router.navigate(['/']);
          return false;
        }
        return true;
      });
  }

}
