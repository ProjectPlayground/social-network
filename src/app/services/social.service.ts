import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()

export class SocialService {
    constructor(
        private auth: AuthService,
        private userService: UserService,
        private af: AngularFire ){
            
        }
        
    createPost(postData) {
        
    }
}