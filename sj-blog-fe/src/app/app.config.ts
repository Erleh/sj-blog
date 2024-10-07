import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { csrfInterceptor } from './common/interceptors/csrf.interceptor';
import { headerInterceptor } from './common/interceptors/header.interceptor';
import { provideMarkdown } from 'ngx-markdown';
import { refreshInterceptor } from './common/interceptors/refresh.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Provide markdown library
    provideMarkdown(),
    // Routes
    provideRouter(routes),
    // HttpClient
    provideHttpClient(
      // Registering Functional Interceptors
      withInterceptors(
        [
          csrfInterceptor,
          headerInterceptor,
          refreshInterceptor
        ]
      )
    )
  ]
};
