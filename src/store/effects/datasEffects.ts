/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   15-06-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-06-2017
*/

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from "@ngrx/effects";

import { MainActions } from '../../store/actions/mainActions';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import firebase from 'firebase';

@Injectable()
export class datasEffects {
  constructor(
    private action$: Actions,
    private _db$: AngularFireDatabase
  ) {
  }

  @Effect() saveRecors$ = this.action$
      // Listen for the 'SAVE_RECORS' action
      .ofType('SAVE_RECORS')
      .map<Action, any>(toPayload)
      .switchMap<Action, any>((payload:any) => {
        console.log('in saveRecors$ ',payload)
        return Observable.fromPromise(
          <Promise<firebase.Promise<any>>>this._db$.database.ref(`speedometer/${payload.id||payload.uid}`)
                                                            .set({max:payload.max,datetime: Date.now()})
                                                            .then(res=>{return payload})
                                                            .catch(err => {return err})
        )
      })
      .switchMap<any, Action>((payload:any) => {
        return Observable.of<Action>({ type: 'SAVE_RECORS_SUCCESS', payload: payload });
      })
      .catch(err => {
        return  Observable.of<Action>({type: 'SAVE_RECORS_FAILED', payload: err})
      })

  @Effect() getDatasArray$ = this.action$
      // Listen for the 'LOGOUT' action
      .ofType('GET_DATAS_ARRAY')
      .map<Action, any>(toPayload)
      .switchMap<Action, FirebaseListObservable<any>>((payload:any) => this._db$.list(payload))
      .switchMap(res=>  Observable.of<Action>({type: 'GET_DATAS_ARRAY_SUCCESS', payload: res}))
      .catch(err => {
        return  Observable.of<Action>({type: 'GET_DATAS_ARRAY_FAILED', payload: err})
      })

}
