import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

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

  logout() {
    return this.httpClient.post(
      `${environment.apiUrl}/api/logout`,
      {}
    );
  }
}
