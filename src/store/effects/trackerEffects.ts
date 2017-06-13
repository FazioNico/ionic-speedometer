/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   11-06-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
*/

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from "@ngrx/effects";

import { MainActions } from '../../store/actions/mainActions';
import { LocationTrackerService } from "../services/location-tracker/location-tracker";

@Injectable()
export class trackerEffects {

    constructor(
      private action$: Actions,
      private _locator: LocationTrackerService
    ) {
    }

    @Effect() startTracking$ = this.action$
        .ofType(MainActions.START_TRACKING)
        .map<Action,any>(toPayload)
        .switchMap((payload:Observable<any>)=> {
          console.log('in startTracking$->')
          return this._locator.startTracking()
        })

    @Effect() getTrackerDatas$ = this.action$
        .ofType(
          MainActions.START_BG_TRACKING_SUCCESS,
          MainActions.START_BG_TRACKING_FAILED
        )
        .map<Action,any>(toPayload)
        .switchMap((payload:Observable<any>)=> {
          console.log('in getTrackerDatas$->', payload)
          // TODO: test if payload has proprety latitude, longitude...
          // to return error in case of empty of typeof string (error string)
          return this._locator.trackLocation()
        })
        .catch((err: any) => {
          console.log('Error getTrackerDatas$ -->', err)
          return Observable.of({ type: MainActions.START_BG_TRACKING_FAILED, payload: err })
        })

}
