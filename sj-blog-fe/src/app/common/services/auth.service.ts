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

  logout() {
    this.userControllerProxy.logout().subscribe();
    this.loggedIn.next(false);
  }
}
