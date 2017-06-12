/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-06-2017
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
 import { MainActions } from '../store/actions/mainActions';

 // Import Providers Services
 import { LocationTrackerService } from './services/location-tracker/location-tracker';
 import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
 import { Geolocation } from '@ionic-native/geolocation';

 let providers:Array<any> =  [
     LocationTrackerService,
     BackgroundGeolocation,
     Geolocation
 ];
 let effects:Array<any> = [
     trackerEffects
 ];
 let actions:Array<any> = [
     MainActions
 ];

 /*
   Bootstrap NgModule
 */
 @NgModule({
   imports: [
     HttpModule,
     EffectsModule.runAfterBootstrap(trackerEffects),
     StoreModule.provideStore(reducer),
     StoreDevtoolsModule.instrumentOnlyWithExtension(),
   ],
   providers: [...providers, ...effects, ...actions]
 })
 export class NgRxStoreModule {}
