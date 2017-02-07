import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private auth: AuthService
    ){
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }

    loginUser(){
        let user = this.loginForm.value;
        this.auth.signin(user).then(userInfo => {
            this.loginForm.reset();
            console.log(userInfo);
        });
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }
}