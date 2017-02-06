import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Third Party */
import { AngularFireModule } from 'angularfire2';
import { FireBaseConfig } from './config/firebase';

/* Custom Components */
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

/* Services */
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FireBaseConfig),
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
