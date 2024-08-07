import { Component, OnInit } from '@angular/core';
import { GoogleAuthComponent } from "./google-auth/google-auth.component";
import { GoogleAuthService } from '../common/services/google-auth.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authservers',
  standalone: true,
  imports: [RouterOutlet, GoogleAuthComponent],
  templateUrl: './authservers.component.html',
  styleUrl: './authservers.component.css'
})
export class AuthserversComponent implements OnInit{
  constructor(
    private googleAuth : GoogleAuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  handleAuthWithGoogle() {
    this.googleAuth.login();
  }

  // Redirection occurs when accessing the authorization server page for user permissions
  // the page is then redirected, when following 'code' flow
  handleRedirect(event: any) {
    // If redirect from Google OAuth2 code flow is hit, continue exchange for tokens
    if (event.constructor.name === "_GoogleAuthRedirectComponent") {
      // Continue with google code flow using backend for exchange
      let authCode = this.googleAuth.retrieveGoogleAuthorizationCode();
      this.googleAuth.requestGoogleTokens(authCode);
    }
  }
}
