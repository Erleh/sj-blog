import { Component } from '@angular/core';
import { GoogleAuthComponent } from "./google-auth/google-auth.component";
import { GoogleAuthService } from '../common/services/google-auth.service';
import { RouterOutlet } from '@angular/router';
import { CsrfService } from '../common/services/csrf.service';
import { CreateAccountFormComponent } from "./create-account-form/create-account-form.component";

@Component({
  selector: 'app-authservers',
  standalone: true,
  imports: [RouterOutlet, GoogleAuthComponent, CreateAccountFormComponent],
  templateUrl: './authservers.component.html',
  styleUrl: './authservers.component.css'
})
export class AuthserversComponent{
  constructor(
    private googleAuthService: GoogleAuthService,
    private csrf: CsrfService,
  ) {}

  handleAuthWithGoogle() {
    this.googleAuthService.requestGoogleAuthCode();
  }

  // Redirection occurs when accessing the authorization server page for user permissions
  // the page is then redirected, when following 'code' flow
  handleRedirect(event: any) {
    // If redirect from Google OAuth2 code flow is hit, continue exchange for tokens
    if (event.constructor.name === "_GoogleAuthRedirectComponent") {
      // Ensure that client has active csrf token
      this.csrf.getCsrf().subscribe(res => {
        // Continue with google code flow using backend for exchange
        let authCode = this.googleAuthService.retrieveGoogleAuthorizationCode();
        this.googleAuthService.requestGoogleTokens(authCode);
      });
    }
  }
}
