import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
    @Input()  user: User;

    constructor(
        private userService: UserService,
        private location: Location,
        private route: ActivatedRoute
    ){}

    ngOnInit() {
        this.route.params
            .switchMap( (params: Params) => this.userService.getUserById(params['id']))
            .subscribe( user => console.log(user));
    }
}