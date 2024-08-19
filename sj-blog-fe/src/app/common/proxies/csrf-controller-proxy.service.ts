import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CsrfControllerProxyService {
  constructor(
    private httpClient : HttpClient
  ) { }

  getCsrf() {
    return this.httpClient.get(
      `${environment.apiUrl}/public/csrf`
    );
  }
}
