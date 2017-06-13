/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   30-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs/Rx';

import { AppStateI } from "../store/app-stats";
import { MainActions } from "../store/actions/mainActions";

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;
  public storeError:Observable<AppStateI>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private store: Store<any>,
    private mainActions: MainActions
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      /**
       * Using NgRx Store to get manage Error Stats
       */
       this.storeError = this.store.select(state => state.error)
       this.storeError.subscribe(error => {
         if(error){
           this.displayError(error)
         }
       })

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


  displayError(error):void {
    console.error('displayError-> ', error.toString())
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: error.toString(),
      buttons: [
      {
        text: 'Dismiss',
        role: 'cancel',
        handler: () => {
          // console.log('Dismiss clicked');
          this.store.dispatch(<Action>this.mainActions.errorClean())
        }
      }]
    });
    alert.present();
  }
}
