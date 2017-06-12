/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface IRecorsState extends Object{
   max:number;
   min:number;
 }

 export let intitialState:IRecorsState = {
    max: 0,
    min: 0
 }

 export function reducer (state:IRecorsState = intitialState, action:Action):IRecorsState {
     // console.log('RECORS REDUCER-> ', action);
     switch (action.type) {
       case MainActions.GET_TRACKER_DATA_SUCCESS: {
         return (action.payload.speed > state.max )? Object.assign({}, state, {max: action.payload.speed}): state
       }
       default: {
         return <IRecorsState>state;
       }
     }
 };
