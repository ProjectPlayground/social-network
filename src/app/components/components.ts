import { Component } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component'; 
import { UserDropDownComponent } from './user-dropdown/user-dropdown.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountComponent } from './account/account.component';
import { PostFormComponent } from './post-form/post-form.component';
import { TimelineComponent } from './timeline/timeline.component';

export const COMPONENTS: Component[] = [
    CreateUserComponent,
    UserDropDownComponent,
    LoginComponent,
    PeopleComponent,
    UserProfileComponent,
    AccountComponent,
    PostFormComponent,
    TimelineComponent
];

export * from './create-user/create-user.component'; 
export * from './user-dropdown/user-dropdown.component';
export * from './login/login.component';
export * from './people/people.component';
export * from './user-profile/user-profile.component';
export * from './account/account.component';
export * from './post-form/post-form.component';
export * from './timeline/timeline.component';