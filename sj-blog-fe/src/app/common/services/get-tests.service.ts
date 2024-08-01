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
    return this.http.get(`${this.apiUrl}/get_hello`);
  }

  getCsrf() {
    return this.http.get(`${this.apiUrl}/get_csrf`);
  }
}
