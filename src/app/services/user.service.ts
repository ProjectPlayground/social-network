import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AsyncLocalStorage } from 'angular-async-local-storage'

@Injectable()

export class UserService {
    constructor(
        private af: AngularFire,
        private ls: AsyncLocalStorage){}

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

    saveUser(userData) {
        this.ls.setItem('userInfo', userData).subscribe(() => {
            console.log('User has been saved succesfully');
        });
    }

}