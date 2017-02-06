import { Injectable } from '@angular/core';
import { FirebaseApp, FirebaseRef, AngularFire} from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(public af:AngularFire) {}
  
  getAuth() {
    return this.af.auth; 
  };
  
  signin(credentails) {   
    return this.af.auth.login(credentails);
  }
  
  createUser(credentails) {
   return this.af.auth.createUser(credentails);
  };
  
  logout() {
     this.af.auth.logout();
  }
}