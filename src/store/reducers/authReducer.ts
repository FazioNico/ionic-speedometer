/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   13-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface IAuthState extends Object {};

 export let intitialState:IAuthState = null

 export function reducer (state:IAuthState = intitialState, action:Action):IAuthState {
     // console.log('AUTH REDUCER-> ', action);
     switch (action.type) {
       case 'TEST_LOGIN': {
         return Object.assign({}, state)
       }
       default: {
         return <IAuthState>state;
       }
     }
}
