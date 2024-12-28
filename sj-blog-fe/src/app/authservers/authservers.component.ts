import { Component, OnInit } from '@angular/core';
import { GoogleAuthComponent } from "./google-auth/google-auth.component";
import { GoogleAuthService } from '../common/services/google-auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { CsrfService } from '../common/services/csrf.service';
import { AuthService } from '../common/services/auth.service';
import { GoogleAuthRedirectComponent } from './google-auth-redirect/google-auth-redirect.component';

@Component({
  selector: 'app-authservers',
  standalone: true,
  imports: [RouterOutlet, GoogleAuthComponent],
  templateUrl: './authservers.component.html',
  styleUrl: './authservers.component.css'
})
export class AuthserversComponent implements OnInit{
  shouldCreateAccount = false;

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService,
    private csrf: CsrfService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    // Checks if the user is logged in already
    this.authService.checkHasPrincipal();

    // If so, then redirect the user back to the front page instead of login again
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigateByUrl("/");
      }
    });
  }

  handleAuthWithGoogle() {
    this.googleAuthService.requestGoogleAuthCode();
  }

  // Redirection occurs when accessing the authorization server page for user permissions
  // the page is then redirected, when following 'code' flow
  handleAuthAfterRedirect(event: any) {
    // If redirect from Google OAuth2 code flow is hit, continue exchange for tokens
    if (event instanceof GoogleAuthRedirectComponent) {

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
        this.authService.checkHasPrincipal();
      } else {
        // Ask to create account if false
        this.shouldCreateAccount = true;
        this.router.navigateByUrl("/create_account");
      }
    });
  }
}
