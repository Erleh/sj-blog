import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleSvgIconComponent } from "../../common/svgs/google-svg-icon/google-svg-icon.component";

@Component({
  selector: 'app-google-auth',
  standalone: true,
  imports: [GoogleSvgIconComponent],
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.css'
})
export class GoogleAuthComponent {
  @Output() authWithGoogle = new EventEmitter();

  beginAuthWithGoogle() {
    this.authWithGoogle.emit();
  }
}
