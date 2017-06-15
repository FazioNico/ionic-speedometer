/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-06-2017
 */


 import { NgModule } from '@angular/core';
 import { HttpModule } from '@angular/http';

 // Import ngrx Tools
 import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 import { StoreModule } from '@ngrx/store';
 import { EffectsModule } from '@ngrx/effects';

 // Import ngRx Store
 import { reducer } from '../store/reducers';
 import { trackerEffects } from '../store/effects/trackerEffects';
 import { authEffects } from '../store/effects/authEffects';
 import { MainActions } from '../store/actions/mainActions';

 // Import Providers Services
 import { LocationTrackerService } from './services/location-tracker/location-tracker';
 import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
 import { Geolocation } from '@ionic-native/geolocation';

 // AngularFire2
 import { AngularFireModule } from 'angularfire2';
 // import { AngularFireDatabaseModule } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { FB_CONFIG } from "./store.config";

 const providers:Array<any> =  [
     LocationTrackerService,
     BackgroundGeolocation,
     Geolocation
 ];
 const effects:Array<any> = [
     trackerEffects,
     authEffects
 ];
 const actions:Array<any> = [
     MainActions
 ];

 /*
   Bootstrap NgModule
 */
 @NgModule({
   imports: [
     HttpModule,
     EffectsModule.runAfterBootstrap(trackerEffects),
     EffectsModule.runAfterBootstrap(authEffects),
     StoreModule.provideStore(reducer),
     StoreDevtoolsModule.instrumentOnlyWithExtension(),
     AngularFireModule.initializeApp(FB_CONFIG),
     // AngularFireDatabaseModule,
     AngularFireAuthModule
   ],
   providers: [...providers, ...effects, ...actions]
 })
 export class NgRxStoreModule {}
