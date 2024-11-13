import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FullLogoSvgIconComponent } from "../common/svgs/full-logo-svg-icon/full-logo-svg-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, FullLogoSvgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  loggedIn = false;

  constructor (
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.checkHasPrincipal();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}
