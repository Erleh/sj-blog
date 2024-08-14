import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../../common/services/account.service';
import { FormsModule, NgForm } from '@angular/forms';

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
    private accountService: AccountService
  ) {

  }

  onSubmit(userCreationForm:NgForm) {
    let username = userCreationForm.value.username;

    this.tryToCreateAccount(username);
  }



  tryToCreateAccount(username: String) {
    // Check if the select username is available
    let isTaken = this.accountService.checkUsername(this.username);

    // Taken
    if (isTaken) {
      return;
    }

    // Create account
  }
}
