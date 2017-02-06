import { Component } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component'; 
import { UserDropDownComponent } from './user-dropdown/user-dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';

export const COMPONENTS: Component[] = [
    CreateUserComponent,
    UserDropDownComponent,
    NavbarComponent
];

export * from './create-user/create-user.component'; 
export * from './user-dropdown/user-dropdown.component';
export * from './navbar/navbar.component';