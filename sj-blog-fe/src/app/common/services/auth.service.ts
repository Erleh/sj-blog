import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserControllerProxyService } from '../proxies/user-controller-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private userControllerProxy: UserControllerProxyService
  ) { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  login() {
    this.userControllerProxy.login().subscribe();
    this.loggedIn.next(true);
  }

  // Logout should clear all saved tokens
  logout() {
    this.userControllerProxy.logout().subscribe();

    // assuming that the provider of the refresh token can be of multiple 
    // sources, it makes less sense to put a definitive revoking token
    // of a specific source here
    //
    //
    // consider saving the source within the database with the refresh token
    // then that can be used for which source to revoke the token from
    //
    //

    this.loggedIn.next(false);
  }
}
