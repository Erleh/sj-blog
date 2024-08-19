import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CanShowCreateAccountService implements CanActivate{

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  // Route guard to make sure that the create account page is only accessed
  // from the login page with token issuer
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 
  ) {
    if (this.router.url === "/login") {
      if (this.cookieService.get("iss")) {
        return true;
      }
    }
    
    return false;
  }
}
