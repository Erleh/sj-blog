import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAdminAccessService implements CanActivate{

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 
  ): Observable<boolean> {
    return this.accountService.checkIfUserIsAdmin().pipe(
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['unauthorized']);
        }
      }),
      catchError(() => {
        this.router.navigate(['unauthorized']);

        return of(false); // Return a boolean even on error
      })
    );
  }
}
