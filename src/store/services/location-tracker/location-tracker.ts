/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';

import { MainActions } from "../../actions/mainActions";


/*
Generated class for the LocationTrackerProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/

export interface ITrackerDatas {
  latitude:number;
  longitude:number;
  speed:number
}
// Class do not working with decimal number in constructor... anyway.
// export class TrackerDatas implements ITrackerDatas {
//   lat = 0.0;
//   lng = 0.0;
//   speed = 0.0;
//   constructor(data){
//     this.lat = data.latitude | data.coords.latitude
//     this.lng = data.longitude | data.coords.longitude
//     this.speed = data.speed | data.coords.speed
//     console.log(this, data)
//   }
// }

@Injectable()
export class LocationTrackerService {

  public watch: any;
  public tracker:ITrackerDatas;

  constructor(
    private backgroundGeolocation: BackgroundGeolocation,
    private geolocation: Geolocation
  ) {
  }

  startTracking():Observable<any> {
    return Observable.create((observer) => {
        // Background Tracking
        let config:BackgroundGeolocationConfig = {
          desiredAccuracy: 0,
          stationaryRadius: 20,
          distanceFilter: 10,
          debug: true,
          interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe((location:BackgroundGeolocationResponse) => {
          // console.log('BackgroundGeolocation:  ', location);
          let data:ITrackerDatas = {
            latitude: location.latitude,
            longitude: location.longitude,
            speed: location.speed | 0
          }
          observer.next( {type: MainActions.START_BG_TRACKING_SUCCESS, payload: data })
        }, (err) => {
          //console.log(err);
          observer.next( {type: MainActions.START_BG_TRACKING_FAILED, payload: err })
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();

    })
  }

  trackLocation(){
    return Observable.create((observer) => {
      // Foreground Tracking
      let options = {
        frequency: 3000,
        enableHighAccuracy: true
      };

      this.watch = this.geolocation.watchPosition(options)
                                   .filter((p: any) => p.code === undefined)
                                   .subscribe((position: Geoposition) => {
                                      // console.log('geolocation', position);
                                      let data:ITrackerDatas = {
                                        latitude: position.coords.latitude,
                                        longitude: position.coords.longitude,
                                        speed: position.coords.speed | 0
                                      }
                                      observer.next( {type: MainActions.GET_TRACKER_DATA_SUCCESS, payload: data })
                                   });
    })
  }

  stopTracking() {
    console.log('stopTracking');
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}
