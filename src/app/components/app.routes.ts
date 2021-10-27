import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'user/:id', component: UserComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
