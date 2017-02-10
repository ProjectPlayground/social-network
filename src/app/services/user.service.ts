import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
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
            query['startAt'] = username;
        }
        let users: FirebaseListObservable<User[]>  = this.af.database.list('/users', {
            query: query
        });
        console.log(query);
        return users;
    }

    isUserFree(username) {
        return this.searchUser(username).map( users => {
            let isFree = ( users.length === 0 ) ? true : false;
            return isFree;
        });
    }

    createUser(user: User) {
        return this.isUserFree(user.username)
            .filter( value => value === true )
            .switchMap( () => this.authService.createUser({ email: user.email, password: user.password}))
            .switchMap( userInfo => this.createUserObject(userInfo, user));
    }

    createUserObject( userInfo: FirebaseAuthState, user: User ) {
        let uid: string = userInfo.auth.uid;
        return this.af.database.object(`/users/${uid}`).set(user);
    }

    getUser(userInfo: FirebaseAuthState) {
        let uid: string = userInfo.auth.uid;
        return this.af.database.object(`/users/${uid}`);
    }

    getUserById( uid: string ) {
        return this.af.database.object(`/users/${uid}`);
    }

}