import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { BehaviorSubject,Observable } from 'rxjs';
import {User} from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout():void {
      this.loggedIn.next(false);
      this.router.navigate(['/landing']);
  }

  constructor(private router: Router) {
  }

  login(user: User){
      this.loggedIn.next(true);
      this.router.navigate(['/home/dashboard']);
  }
}
