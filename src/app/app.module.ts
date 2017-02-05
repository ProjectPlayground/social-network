import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Third Party */
import { AngularFireModule } from 'angularfire2';
import { FireBaseConfig } from './config/firebase';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

/* Custom */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    AsyncLocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
