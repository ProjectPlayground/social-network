import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';

import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()

export class SocialService {
    constructor(
        private auth: AuthService,
        private userService: UserService,
        private af: AngularFire ){
            
        }
        
    sendPost(postData) {
       return  this.auth.getAuth()
            .switchMap(userInfo => this.createPost(postData, userInfo.auth.uid));
    }
    
    createPost(postData, uid) {
        let posts = this.af.database.list('/posts');
        postData.from = uid;
        postData.timestamp = firebase.database['ServerValue'].TIMESTAMP;
        return posts.push(postData);
    }
    
    postImage(postId, image) {
        let filename = postId + '.jpg';
        
        return firebase.storage().ref(`/posts/${filename}`).put(image);
    }
    
    updatePost(postId, obj) {
        console.log(obj);
        return this.af.database.object(`/posts/${postId}`).update(obj);
    }
    
}