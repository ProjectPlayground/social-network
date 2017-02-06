import { Component } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component'; 
import { UserDropDownComponent } from './user-dropdown/user-dropdown.component';

export const COMPONENTS: Component[] = [
    CreateUserComponent,
    UserDropDownComponent
];

export * from './create-user/create-user.component'; 
export * from './user-dropdown/user-dropdown.component';