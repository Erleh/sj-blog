import { Component } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  constructor (
    public authService: AuthService
  ) {
    console.log(authService.isLoggedIn$.pipe());
  }

  logout() {
    this.authService.logout();
  }
}
