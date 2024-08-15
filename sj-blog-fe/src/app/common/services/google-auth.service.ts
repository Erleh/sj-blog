import { Injectable } from '@angular/core';
import { getGoogleAuthCodeQueryString } from '../../configurations/google-auth.config';
import { GoogleAuthControllerProxyService } from '../proxies/google-auth-controller-proxy.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  constructor(
    private googleAuthControllerProxy: GoogleAuthControllerProxyService,
    private activatedRoute: ActivatedRoute
  ) {}

  requestGoogleAuthCode() {
    // Redirect to google authorization server to retrieve auth code
    window.location.href = getGoogleAuthCodeQueryString();
  }

  // Extract Authorization Code from the url after confirming state match
  retrieveGoogleAuthorizationCode(): String {
    let findAuthCode = false;
    
    // state param is returned by google oauth2 code flow after consenting permissions
    let state = this.activatedRoute.snapshot.queryParamMap.get("state");
    
    // if state exists, perform the rest of google oauth2 code flow
    if (state !== null) {
      if (state === localStorage.getItem("state")) {
        findAuthCode = true;
      }  
    }
    
    // extract auth code from route params and send it to the backend for exchanging
    if (findAuthCode) {
      let uriAuthCode = this.activatedRoute.snapshot.queryParamMap.get("code");
      
      // Check if authCode exists
      if (uriAuthCode !== null) {
        // send authCode for exchange
        return decodeURIComponent(uriAuthCode);
      }
    }
    
    return "";
  }

  // Use the retrieved authCode to exchange for Google Auth token
  requestGoogleTokens(authCode: String) {
    this.googleAuthControllerProxy.exchangeAuthCodeForTokens(authCode).subscribe(
      () => {
        // Test if the user exists
        this.checkForUserByToken();
      }
    )
  }

  // Test if user exists through the given access token
  checkForUserByToken() {

    this.googleAuthControllerProxy.checkIfUserExists().subscribe(exists => {
      if (!exists) {
        // The does not exist, redirect to the create_account page
      }
      //
      //
      // else login
      //
      //
    });
  }

  createAccount(username: String) {
    this.googleAuthControllerProxy.createAccountWithGoogleAccessToken(username)
      .subscribe();
  }
  
  login() {
    // login here, authorize the user
  }

  logout() {
    // logoff here, remove authorities
  }
}
