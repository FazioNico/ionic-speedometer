/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   14-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 14-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface INavState extends String {};

 export let intitialState:INavState = null

 export function reducer (state:INavState = intitialState, action:Action):INavState {
     // console.log('NAVIGATION REDUCER-> ', action);
     switch (action.type) {
       case 'OPEN_MODAL' :
       case 'OPEN_MODAL_SUCCESS': {
         // console.log(action.payload)
         return <INavState>action.payload
       }
       case 'CLOSE_MODAL':
       case 'CLOSE_MODAL_SUCCESS':
       default: {
         return <INavState>intitialState;
       }
     }
}
