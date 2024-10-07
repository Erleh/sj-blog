import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserControllerProxyService {
  constructor(
    private httpClient : HttpClient
  ) {}

  checkIfUsernameExists(username: String) {
    return this.httpClient.post(
      `${environment.apiUrl}/public/does_username_exist`,
      username
    );
  }

  checkIfUserIsAdmin() {
    return this.httpClient.get<boolean>(
      `${environment.apiUrl}/api/is_admin`
    );
  }

  checkHasPrincipal() {
    return this.httpClient.get<boolean>(
      `${environment.apiUrl}/public/has_principal`
    );
  }

  login() {
    return this.httpClient.get(
      `${environment.apiUrl}/api/login`
    )
  }

  logout() {
    return this.httpClient.post(
      `${environment.apiUrl}/logout`,
      {}
    );
  }
}
