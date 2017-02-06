import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable()

export class UserService {
    constructor(
        private af: AngularFire,
        private authService: AuthService){}

    searchUser(username) {
        let query = {
            orderByChild: 'username'
        };
        // username is given
        if(username) {
            query['equalTo'] = username;
        }
        let users = this.af.database.list('/users', {
            query: query
        });
        return users;
    }

    isUserFree(username) {
        return this.searchUser(username).map( users => {
            let isFree = ( users.length === 0 ) ? true : false;
            return isFree;
        });
    }

    createUser(user: User) {
        this.isUserFree(user.username)
            .filter( value => value === true )
            .switchMap( () => this.authService.createUser({ email: user.email, password: user.password}))
            .subscribe( userInfo => {
                let uid: string = userInfo.auth.uid;
                this.af.database.object(`/users/${uid}`)
                    .set(user)
                    .then( value => console.log('successfully'))
                    .catch( err => console.log(err));
            });
    }

    getUser(uid: string) {
        return this.af.database.object(`/users/${uid}`);
    }

}