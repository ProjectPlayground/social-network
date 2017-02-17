import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

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
        let uid;
        return this.auth.getAuth()
                .map(userInfo => { 
                    uid = userInfo.auth.uid; 
                    return uid;
                })
                .switchMap(uid => this.createPost(postData, uid))
                .map(obj => obj.key)
                .do(key => this.updateUserFeed(key, uid))
    }
    
    createPost(postData, uid) {
        let posts = this.af.database.list('/posts');
        postData.from = uid;
        postData.timestamp = firebase.database['ServerValue'].TIMESTAMP;
        return posts.push(postData);
    }
    
    updateUserFeed(postKey, uid) {
        let userFeed =this.af.database.object(`/users/${uid}/feed`);
        userFeed.update({[postKey]: true});
    }
    
    postImage(postId, image) {
        let filename = postId + '.jpg';
        return firebase.storage().ref(`/posts/${filename}`).put(image);
    }
    
    updatePost(postId, obj) {
        return this.af.database.object(`/posts/${postId}`).update(obj);
    }
    
}