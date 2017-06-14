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

  // Tracking Actions 
  static GET_TRACKER_DATA:string = 'GET_TRACKER_DATA';
  static GET_TRACKER_DATA_SUCCESS:string = 'GET_TRACKER_DATA_SUCCESS';

  static START_TRACKING:string = 'START_TRACKING';
  startTracking(){
    return <Action>{
        type: MainActions.START_TRACKING,
        payload: null
    }
  }
  static START_BG_TRACKING_SUCCESS:string = 'START_BG_TRACKING_SUCCESS';
  static START_BG_TRACKING_FAILED:string = 'START_BG_TRACKING_FAILED';

  static ERROR_CLEAN:string = 'ERROR_CLEAN';
  errorClean(){
    return <Action>{
        type: MainActions.ERROR_CLEAN,
        payload: null
    }
  }

  // Auth Actions
  static CHECK_AUTH:string = 'CHECK_AUTH';
  checkAuth(): Action {
      return <Action>{
          type: MainActions.CHECK_AUTH,
      }
  }
  static CHECK_AUTH_SUCCESS:string = 'CHECK_AUTH_SUCCESS';
  static CHECK_AUTH_FAILED:string = "CHECK_AUTH_FAILED";
  static CHECK_AUTH_NO_USER:string = 'CHECK_AUTH_NO_USER';

  static LOGIN:string = "LOGIN";
  login(_credentials ): Action {
      return <Action>{
          type: MainActions.LOGIN,
          payload: _credentials.value
      }
  }
  static LOGIN_SUCCESS:string = "LOGIN_SUCCESS";
  static LOGIN_FAILED:string = "LOGIN_FAILED";
  static LOGOUT:string = "LOGOUT";
  logout(): Action {
      return <Action>{
          type: MainActions.LOGOUT,
      }
  }
  static LOGOUT_SUCCESS:string = "LOGOUT_SUCCESS";
  static LOGOUT_FAILED:string = "LOGOUT_FAILED"

  static CREATE_USER:string = "CREATE_USER";
  create_user(_credentials ): Action {
      return <Action>{
          type: MainActions.CREATE_USER,
          payload: _credentials.value
      }
  }
  static CREATE_USER_SUCCESS:string = "CREATE_USER_SUCCESS";
  static CREATE_USER_FAILED:string = "CREATE_USER_FAILED"

}
