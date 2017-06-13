/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
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
         let rand:number = Math.floor(Math.random() * 10) + 1;
         let data:number = action.payload.speed;
         return ( data> state.max )? Object.assign({}, state, {max: data }): state
       }
       default: {
         return <IRecorsState>state;
       }
     }
 };
