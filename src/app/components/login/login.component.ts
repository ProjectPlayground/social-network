import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ){
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }

    loginUser(){
        console.log(this.loginForm.value);
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }
}