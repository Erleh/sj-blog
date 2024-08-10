import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

// This service will act as proxy for requests to the backend GoogleAuthController functions
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthControllerProxyService {
  constructor(
    private httpClient : HttpClient
  ) {}

  exchangeAuthCodeForTokens(authCode: String) {
    return this.httpClient.post(
      environment.apiUrl + "/public/google_token_exchange",
      authCode
    );
  }
}
