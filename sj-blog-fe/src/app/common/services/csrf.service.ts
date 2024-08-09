import { Injectable } from '@angular/core';
import { CsrfControllerProxyService } from '../proxies/csrf-controller-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {
  constructor(
    private csrf: CsrfControllerProxyService
  ) { }

  getCsrf() {
    return this.csrf.getCsrf();
  }
}
