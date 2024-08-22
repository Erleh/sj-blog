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
      `${environment.apiUrl}/public/google_token_exchange`,
      authCode
    );
  }

  checkIfUserExists() {
    return this.httpClient.get(
      `${environment.apiUrl}/public/google_does_user_exist`
    );
  }

  createAccountWithGoogleAccessToken(username: String) {
    return this.httpClient.post(
      `${environment.apiUrl}/public/google_create_user`,
      username
    );
  }

  revokeToken() {
    return this.httpClient.post(
      `${environment.apiUrl}/api/google_revoke_token`,
      {}
    );
  }
}
