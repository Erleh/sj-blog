import { Routes } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { AuthserversComponent } from './authservers/authservers.component';

export const routes: Routes = [
    {path: '', component: PostlistComponent},
    {path: 'login', component: AuthserversComponent}
];
