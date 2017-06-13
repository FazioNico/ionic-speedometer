/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   30-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      /**
       * RootPage declaration into platform.ready()
       * prevent cordova native plugins error type:
       *    Error: BackgroundGeolocation - Plugin not Installed
       *
       * Because HomePage using native plugin as Geolocation and BackgroundGeolocation
       * To meke shure it work propely, be carrefull to declare rootPage
       * into platform.ready().then(). This will runing native app litte more slowly
       * but with all cordova plugin available on starting app state. 
       */
      this.rootPage = HomePage;
    });
  }
}
