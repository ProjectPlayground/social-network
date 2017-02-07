import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent {
    createUserForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ){
        this.createUserForm = this.fb.group({
            username: [''],
            name: [''],
            email: [''],
            password: ['']
        });
    }
    createUser(){
        const user: User = this.createUserForm.value;
        this.userService.createUser(user).subscribe( val => {
            this.createUserForm.reset();
        });
    }
}