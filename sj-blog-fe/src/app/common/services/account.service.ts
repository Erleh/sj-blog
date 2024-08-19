import { Injectable } from '@angular/core';
import { UserControllerProxyService } from '../proxies/user-controller-proxy.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private userControllerProxy: UserControllerProxyService
  ) { }

  createAccount(username: String) {
    
  }

  checkUsername(username: String) {
    console.log("checking name: " + username);
    return this.userControllerProxy.checkIfUsernameExists(username);
  }

  checkIfUserIsAdmin() {
    return this.userControllerProxy.checkIfUserIsAdmin();
  }
}
