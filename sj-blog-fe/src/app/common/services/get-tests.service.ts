import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GetTestsService {
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getHello() {
    return this.http.get(
      `${this.apiUrl}/public/test/get_hello`,
      { 
        responseType: 'text' 
      }
    );
  }

  getCsrf() {
    return this.http.get(
      `${this.apiUrl}/public/test/get_csrf`,
      {
        responseType: 'text'
      }
    );
  }

  getUser() {
    return this.http.get(
      `${this.apiUrl}/public/test/get_user`
    );
  }

  privateGetHello() {
    return this.http.get(
      `${this.apiUrl}/api/private_get_hello`,
      {
        responseType: 'text'
      }
    );
  }

  adminGetHello() {
    return this.http.get(
      `${this.apiUrl}/api/admin_get_hello`,
      {
        responseType: 'text'
      }
    );
  }

  getIsAdmin() {
    return this.http.get(
      `${this.apiUrl}/api/is_admin`,
      {
        responseType: 'text'
      }
    );
  }
}
