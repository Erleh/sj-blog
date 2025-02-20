import { Injectable } from '@angular/core';
import { CsrfService } from '../../services/csrf.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostGuardService {

  constructor(
    private csrfService: CsrfService, 
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.csrfService.isCsrfTokenAvailable()) {
      return true;
    } else {
      return this.csrfService.getCsrf().pipe(
        take(1),
        map(() => true),
        catchError(() => {
          this.router.navigate(['/']); // Home page on error
          return of(false); // Prevent nav
        })
      )
    }
  }
}
