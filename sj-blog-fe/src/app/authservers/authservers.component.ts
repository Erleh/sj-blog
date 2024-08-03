import { Component } from '@angular/core';
import { GoogleAuthComponent } from "./google-auth/google-auth.component";
import { GoogleAuthService } from '../common/services/google-auth.service';

@Component({
  selector: 'app-authservers',
  standalone: true,
  imports: [GoogleAuthComponent],
  templateUrl: './authservers.component.html',
  styleUrl: './authservers.component.css'
})
export class AuthserversComponent {
  constructor(
    private googleAuth : GoogleAuthService
  ) {}

  // Google OAuth2 flow:
  // 1. Redirect to confirmation page
  // 2. Retrieve auth code
  // 3. Request from authorization server using auth code for access, refresh, and id token
  //
  //  Will be using https://www.npmjs.com/package/angular-auth-oidc-client?activeTab=readme
  //  an angular library to provide an oidc client
  //  Following OIDC Code Flow PKCE using refresh tokens
  //
  handleAuthWithGoogle() {

  }
}
