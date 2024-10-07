import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';

export const refreshInterceptor: HttpInterceptorFn = (req, next) => {
  let httpClient = inject(HttpClient);

  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        // Token Expired, or no permission
        return httpClient.get(`${environment.apiUrl}/public/refresh_access`).pipe(
          switchMap(() => {
            return next(req);
          })
        );
      }

      return throwError(() => error);
    })
  )
};
