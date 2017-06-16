/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-06-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface IStatsState extends Array<{max:string, datetime:number}>{
 }

 export let intitialState:IStatsState = []

 export function reducer (state:IStatsState = intitialState, action:Action):IStatsState {
     // console.log('RECORS REDUCER-> ', action);
     switch (action.type) {
       case 'GET_DATAS_ARRAY': {
         return Object.assign([], state)
       }
       case 'GET_DATAS_ARRAY_SUCCESS': {
       return Object.assign([], [...action.payload])
     }  
       default: {
         return <IStatsState>state;
       }
     }
 };
