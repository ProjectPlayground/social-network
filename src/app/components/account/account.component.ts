import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit{
    @ViewChild('imageInput') imageInput: ElementRef;
    user: User;
    constructor(
        private userService: UserService,
        private authService: AuthService
    ){}

    ngOnInit() {
        this.authService.getAuth()
            .switchMap(userInfo => this.userService.getUser(userInfo))
            .subscribe( user => this.user = user );
    }

    uploadPicture() {
        let image = this.imageInput.nativeElement.files[0];
        
        this.authService.getAuth()
            .switchMap(userInfo => this.userService.uploadImage(image, userInfo))
            .switchMap(imgRef => this.userService.updateProfile(this.user, imgRef.downloadURL))
            .subscribe(() => console.log('user updated'));
            
    }
    
    updateProfile() {
        this.userService.updateProfile(this.user)
            .subscribe(() => console.log('user updated'));
    }
}