/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   12-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface IErrorState extends String {};

 export let intitialState:IErrorState = null

 export function reducer (state:IErrorState = intitialState, action:Action):IErrorState {
     //console.log('ERROR REDUCER-> ', action);
     switch (action.type) {
       case MainActions.START_BG_TRACKING_FAILED:
       case MainActions.CHECK_AUTH_FAILED:
       case MainActions.LOGIN_FAILED:
       case MainActions.LOGOUT_FAILED:
       case 'OPEN_MODAL_FAILED':
       case 'SIGNUP_FAILED': {
         return <IErrorState>action.payload
       }
       case MainActions.ERROR_CLEAN: {
         return  <IErrorState>intitialState // use this to clean error state
       }
       default: {
         return <IErrorState>state  || intitialState // to not remove old error on state change
       }
     }
 };
