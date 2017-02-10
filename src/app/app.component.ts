import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  constructor(
    private router: Router,
    private auth: AuthService,
    private userService: UserService)
    {
      this.auth.getAuth()
        .filter( userInfo => userInfo != null)
        .switchMap(userInfo => this.userService.getUser(userInfo))
        .subscribe( user => this.user = user );
    }

  navClicked(route: string) {
    this.router.navigate([route]);
  }

  onLogOut(){
    this.auth.logout().then(() => {
      this.user = null;
    });
  }

  onUserProfile() {
    this.router.navigate(['/account']);
  }

}
