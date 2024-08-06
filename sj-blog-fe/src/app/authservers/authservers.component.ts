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

  handleRedirect(event: any) {
    // If redirect from google is hit
    if (event.constructor.name === "_GoogleAuthRedirectComponent") {
      // Continue with google code flow using backend for exchange
      this.googleAuthCodeRedirect();
    }
  }

  googleAuthCodeRedirect() {
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
      let authCode = this.activatedRoute.snapshot.queryParamMap.get("code");

      // send authCode for exchange
      console.log(authCode);
    }
  }
}
