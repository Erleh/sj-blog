import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserControllerProxyService } from '../proxies/user-controller-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  constructor(
    private userControllerProxy: UserControllerProxyService
  ) { }

  ngOnInit(): void {
    this.checkIsLoggedIn();
  }

  login() {
    this.userControllerProxy.login().subscribe();
    this.loggedIn.next(true);
  }

  logout() {
    this.userControllerProxy.logout().subscribe();
    this.loggedIn.next(false);
  }

  // Check the backend for authentication object to validate the user is logged in
  checkIsLoggedIn() {
    this.userControllerProxy.checkIsLoggedIn().subscribe(isLoggedIn => {
      this.loggedIn.next(isLoggedIn);
    });
  }
}
