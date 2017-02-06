import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Third Party */
import { AngularFireModule } from 'angularfire2';
import { FireBaseConfig } from './config/firebase';

/* Custom Components */
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';

/* Services */
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    ComponentsModule
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
