import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { 
        CreateUserComponent,
        LoginComponent,
        PeopleComponent,
        UserProfileComponent,
        AccountComponent,
        PostFormComponent,
        TimelineComponent
    } from './components/components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full'
    },
    {
        path: 'post',
        component: PostFormComponent
    },
    {
        path: 'register',
        component: CreateUserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'user/:id',
        component: UserProfileComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path:'timeline',
        component: TimelineComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
