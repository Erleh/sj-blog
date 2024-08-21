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
    this.loggedIn.next(true);
  }

  // Logout should clear all saved tokens
  logout() {
    this.userControllerProxy.logout().subscribe();
    this.loggedIn.next(false);
  }
}
