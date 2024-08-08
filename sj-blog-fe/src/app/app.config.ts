import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { csrfInterceptor } from './common/interceptors/csrf.interceptor';
import { headerInterceptor } from './common/interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Routes
    provideRouter(routes),
    // HttpClient
    provideHttpClient(
      // Registering Functional Interceptors
      withInterceptors(
        [
          csrfInterceptor,
          headerInterceptor
        ]
      )
    )
  ]
};
