import { Component, OnInit} from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
    templateUrl: './people.component.html',
    styleUrls: ['people.component.css']
})

export class PeopleComponent implements OnInit {
    private searchInput = new Subject<string>();
    visible: boolean = false;
    users: Observable<User[]>;

    constructor(
        private userService: UserService
    ){
        
    }

    searchUsers(username: string){
        this.searchInput.next(username);
    }

    ngOnInit(){
      this.users = this.searchInput
            .debounceTime(300)
            .do( () => this.visible = true)
            .distinctUntilChanged()
            .switchMap(username => this.userService.searchUser(username));
            
    }

    userProfile(user: User) {
        console.log(user);
    }
}