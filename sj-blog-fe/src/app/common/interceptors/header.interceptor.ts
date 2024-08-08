import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // Allows the addition of credentials (cookies) in response
  let modifiedReq = req.clone({
    withCredentials: true
  });

  return next(modifiedReq);
};
