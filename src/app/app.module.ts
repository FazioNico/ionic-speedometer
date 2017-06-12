/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   30-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-06-2017
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NgzioGaugeComponentModule } from './ngzio-gauge/ngzio-gauge.module';

// Import ngrx Tools
import { NgRxStoreModule } from "../store/store.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // LinearGaugeComponent,
    // RadialGaugeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgRxStoreModule,
    NgzioGaugeComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
