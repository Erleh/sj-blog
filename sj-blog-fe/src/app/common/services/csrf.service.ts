import { Injectable } from '@angular/core';
import { CsrfControllerProxyService } from '../proxies/csrf-controller-proxy.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {
  private csrfTokenSubject = new BehaviorSubject<boolean>(false);
  public csrfTokenAvailable$ = this.csrfTokenSubject.asObservable();

  constructor(
    private csrf: CsrfControllerProxyService
  ) { }

  getCsrf() {
    return this.csrf.getCsrf().pipe(
      tap(() => this.csrfTokenSubject.next(true))
    );
  }

  isCsrfTokenAvailable(): boolean {
    return this.csrfTokenSubject.value;
  }
}
