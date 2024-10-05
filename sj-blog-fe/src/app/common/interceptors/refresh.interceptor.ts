import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';

export const refreshInterceptor: HttpInterceptorFn = (req, next) => {
  let httpClient = inject(HttpClient);

  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        // Token Expired, or no permission
        return httpClient.post('/public/refresh-token', {}).pipe(
          switchMap(() => {
            return next(req);
          })
        );
      }

      return throwError(() => error);
    })
  )
};
