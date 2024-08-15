import { Component } from '@angular/core';
import { AccountService } from '../../common/services/account.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { GoogleAuthService } from '../../common/services/google-auth.service';

@Component({
  selector: 'app-create-account-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account-form.component.html',
  styleUrl: './create-account-form.component.css'
})
export class CreateAccountFormComponent {
  username = '';

  constructor(
    private googleAuthService: GoogleAuthService,
    private accountService: AccountService,
    private cookieService: CookieService
  ) {}

  onSubmit(userCreationForm:NgForm) {
    let username = userCreationForm.value.username;

    this.tryToCreateAccount(username);
  }

  tryToCreateAccount(username: String) {
    // Check that cookie for token issuer exists
    let foundIss = this.cookieService.check("iss");
    
    if (!foundIss) {
      // no iss found means access token of unknown origin, fail creating and account here
      //
      // may need to display visual
      //
      return;
    }

    this.checkUsername(username);
  }

  checkUsername(username: String) {
    // Check if the select username is available
    this.accountService.checkUsername(this.username).subscribe(isTaken => {
      if (isTaken) {
        // Username taken
        //
        // display that the user should try again with a different username
        //
        return;
      } else {
        this.makeAccount(username);
      }
    });
  }

  makeAccount(username: String) {
    let iss = this.cookieService.get("iss");

    // Select the right iss to create an account with
    if (iss === "google.com") {
      this.googleAuthService.createAccount(username);
    }
  }
}
