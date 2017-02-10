import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
    @Input()  user: Observable<User>;

    constructor(
        private userService: UserService,
        private location: Location,
        private route: ActivatedRoute
    ){}

    ngOnInit() {
        this.user = this.route.params
            .switchMap( (params: Params) => this.userService.getUserById(params['id']));
    }

    goBack() {
        this.location.back();
    }

    followUser() {
        let params: Params = this.route.snapshot.params;
        console.log(params['id']);
    }
}