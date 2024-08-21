import { Component, OnInit } from '@angular/core';
import { GoogleAuthComponent } from "./google-auth/google-auth.component";
import { GoogleAuthService } from '../common/services/google-auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { CsrfService } from '../common/services/csrf.service';
import { CreateAccountFormComponent } from "./create-account-form/create-account-form.component";
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-authservers',
  standalone: true,
  imports: [RouterOutlet, GoogleAuthComponent, CreateAccountFormComponent],
  templateUrl: './authservers.component.html',
  styleUrl: './authservers.component.css'
})
export class AuthserversComponent implements OnInit{
  shouldCreateAccount = false;

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService,
    private csrf: CsrfService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigateByUrl("/");
      }
    })
  }
  
  // Consider logged in accounts trying to reach the login page
  //
  // They should be redirected to their account page (if any) or the home page
  // with a message saying they are already logged in


  handleAuthWithGoogle() {
    this.googleAuthService.requestGoogleAuthCode();
  }

  // Redirection occurs when accessing the authorization server page for user permissions
  // the page is then redirected, when following 'code' flow
  handleAuthAfterRedirect(event: any) {
    // If redirect from Google OAuth2 code flow is hit, continue exchange for tokens
    if (event.constructor.name === "_GoogleAuthRedirectComponent") {
      // Ensure that client has active csrf token
      this.csrf.getCsrf().subscribe(res => {
        let authCode = this.googleAuthService.retrieveGoogleAuthorizationCode();

        // Retrieve tokens from google, then check for user with those tokens
        this.googleAuthService.requestGoogleTokens(authCode).subscribe(() => {
          // Reroute to default login path to remove auth code
          this.router.navigateByUrl("/login");
          
          this.checkForUser();
        });
      });
    }
  }

  checkForUser() {
    // Check for user in the backend using google access token
    this.googleAuthService.checkForUserByToken().subscribe((exists) => {
      if (exists) {
        // Successful login if true
        this.authService.login();

      } else {
        // Ask to create account if false
        this.shouldCreateAccount = true;
        this.router.navigateByUrl("/create_account");
      }
    });
  }
}
