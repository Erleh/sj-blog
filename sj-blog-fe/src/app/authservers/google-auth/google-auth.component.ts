import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-google-auth',
  standalone: true,
  imports: [],
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.css'
})
export class GoogleAuthComponent {
  @Output() authWithGoogle = new EventEmitter();

  beginAuthWithGoogle() {
    this.authWithGoogle.emit();
  }
}
