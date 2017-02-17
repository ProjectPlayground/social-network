import { Component, OnInit} from '@angular/core';
import { AngularFire } from 'angularfire2';
import * as firebase  from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { AuthService } from '../../services/auth.service';


@Component({
    templateUrl: './timeline.component.html'
})

export class TimelineComponent implements OnInit {
    feed = [];
    
    constructor(
        private af: AngularFire,
        private auth: AuthService){}
        
    ngOnInit() {
        this.auth.getAuth()
            .map(userInfo => userInfo.auth.uid)
            .subscribe(uid => {
                let url:string = `/users/${uid}/feed`;
                let postRef = firebase.database().ref(url);
                
                postRef.on('child_added', snapshot => {
                    this.feed.unshift(snapshot.key);
                });
            });
    }
}