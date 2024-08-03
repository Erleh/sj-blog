import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environments';

// to do
//
//  Swap to production environment variables when available
//
export const authConfig: PassedInitialConfig = {
  config: {
              authority: 'https://accounts.google.com/o/oauth2/v2/auth',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: environment.googleClientId,
              scope: 'openid email',
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
}
