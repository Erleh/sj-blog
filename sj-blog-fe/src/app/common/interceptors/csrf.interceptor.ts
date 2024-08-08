import { HttpInterceptorFn, HttpXsrfTokenExtractor } from '@angular/common/http';
import { inject } from '@angular/core';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  let csrfExtractor = inject(HttpXsrfTokenExtractor);
  let csrfToken = csrfExtractor.getToken();

  let modifiedReq = req;

  // Adds received csrfToken to the headers of requests
  if (csrfToken) {
    modifiedReq = req.clone({
      setHeaders: {
        "X-XSRF-TOKEN": csrfToken,
      },
    });
  }

  return next(modifiedReq);
};
