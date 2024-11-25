import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { LogoSvgIconComponent } from "../common/svgs/logo-svg-icon/logo-svg-icon.component";
import { TextLogoSvgIconComponent } from "../common/svgs/text-logo-svg-icon/text-logo-svg-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, LogoSvgIconComponent, TextLogoSvgIconComponent],
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
