import { Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { AuthserversComponent } from './authservers/authservers.component';
import { GoogleAuthRedirectComponent } from './authservers/google-auth-redirect/google-auth-redirect.component';
import { CreateAccountFormComponent } from './authservers/create-account-form/create-account-form.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { CanShowCreateAccountService } from './common/interceptors/routeGuard/can-show-create-account.service';
import { CanAdminAccessService } from './common/interceptors/routeGuard/can-admin-access.service';
import { AdmindashComponent } from './admindash/admindash.component';
import { PostComponent } from './post/post.component';
import { BlogPostGuardService } from './common/interceptors/routeGuard/blog-post-guard.service';

export const routes: Routes = [
    {
        path: 'posts/:id/:title',
        canActivate: [BlogPostGuardService],
        component: PostComponent
    },
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
        path: 'admin',
        canActivate: [CanAdminAccessService],
        component: AdmindashComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: ':page_number',
        component: PostlistComponent
    },
    {
        path: '**', 
        component: PostlistComponent
    }
];
