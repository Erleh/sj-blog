import { Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { AuthserversComponent } from './authservers/authservers.component';
import { GoogleAuthRedirectComponent } from './authservers/google-auth-redirect/google-auth-redirect.component';

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
        path: '**', 
        component: PostlistComponent
    }
];
