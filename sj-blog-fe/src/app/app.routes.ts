import { Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { AuthserversComponent } from './authservers/authservers.component';
import { GoogleAuthRedirectComponent } from './authservers/google-auth-redirect/google-auth-redirect.component';
import { CreateAccountFormComponent } from './authservers/create-account-form/create-account-form.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { CanShowCreateAccountService } from './common/interceptors/routeGuard/can-show-create-account.service';

export const routes: Routes = [
    {
        path: 'login', 
        component: AuthserversComponent,
        children: [
            {
                path: 'google', 
                component: GoogleAuthRedirectComponent
            }
        ]
    },
    {
        path: 'create_account',
        canActivate: [CanShowCreateAccountService],
        component: CreateAccountFormComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: '**', 
        component: PostlistComponent
    }
];
