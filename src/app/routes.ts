import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CreateUserComponent } from './components/components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: CreateUserComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
