import { Injectable } from '@angular/core';
import { getGoogleAuthCodeQueryString } from '../../configurations/google-auth.config';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  requestGoogleAuthCode() {
    // Redirect to google authorization server to retrieve auth code
    window.location.href = getGoogleAuthCodeQueryString();
  }
  
  login() {
    // login here, authorize the user
    this.requestGoogleAuthCode();
  }

  logout() {
    // logoff here, remove authorities
  }

  
}
