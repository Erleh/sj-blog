import { Injectable } from '@angular/core';
import { UserControllerProxyService } from '../proxies/user-controller-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private userControllerProxy: UserControllerProxyService
  ) { }

  makeAccount(username: String) {
    
  }

  checkUsername(username: String) {
    return this.userControllerProxy.checkIfUsernameExists(username);
  }
}
