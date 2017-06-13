/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   15-03-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
*/

import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class MainActions {

  static START_TRACKING:string = 'START_TRACKING';
  static START_BG_TRACKING_SUCCESS:string = 'START_BG_TRACKING_SUCCESS';
  static START_BG_TRACKING_FAILED:string = 'START_BG_TRACKING_FAILED';

  static GET_TRACKER_DATA:string = 'GET_TRACKER_DATA';
  static GET_TRACKER_DATA_SUCCESS:string = 'GET_TRACKER_DATA_SUCCESS';

  static ERROR_CLEAN:string = 'ERROR_CLEAN';

  startTracking(){
    return <Action>{
        type: MainActions.START_TRACKING,
        payload: null
    }
  }

  errorClean(){
    return <Action>{
        type: MainActions.ERROR_CLEAN,
        payload: null
    }
  }
}
