import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostTestsService {
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  postHello() {
    return this.http.post(
      `${this.apiUrl}/public/test/post_hello`,
      "success",
      {
        responseType: 'text'
      }
    );
  }
}
