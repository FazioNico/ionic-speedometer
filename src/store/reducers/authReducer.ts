/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   13-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 14-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface IAuthState extends Object {
   id:string,
   email:string
 };

 export let intitialState:IAuthState = null

 export function reducer (state:IAuthState = intitialState, action:Action):IAuthState {
     // console.log('AUTH REDUCER-> ', action);
     switch (action.type) {
       case 'TEST_LOGIN': {
         return Object.assign({}, state)
       }
       case MainActions.CHECK_AUTH_SUCCESS: {
         return Object.assign({}, state, action.payload)
       }
       default: {
         return <IAuthState>state;
       }
     }
}
