/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface ITrackerState {
    latitude:number;
    longitude:number;
    speed:number
 }

 export let intitialState:ITrackerState = {
    latitude:0,
    longitude:0,
    speed:0
 }

 export function reducer (state:ITrackerState = intitialState, action:Action):ITrackerState {
     // console.log('TRACKER REDUCER-> ', action);
     switch (action.type) {
       case MainActions.START_TRACKING: {
         return Object.assign({}, state)
       }
       case MainActions.START_BG_TRACKING_SUCCESS: {
         return Object.assign({}, action.payload)
       }
       case MainActions.GET_TRACKER_DATA_SUCCESS: {
         let rand:ITrackerState = {latitude: 46.1911856, longitude: 6.1357798, speed: Math.floor(Math.random() * 10) + 1};
         let data:ITrackerState = action.payload;
         return Object.assign({}, data)
       }
       default: {
         return <ITrackerState>state;
       }
     }
 };
