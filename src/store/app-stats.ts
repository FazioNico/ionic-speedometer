/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   15-03-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-06-2017
*/

import { Action } from "@ngrx/store";

import { ITrackerState } from '../store/reducers/trackerReducer';
import { IRecorsState } from '../store/reducers/recorsReducer';
import { IErrorState } from '../store/reducers/errorReducer';

export interface AppStateI {
  tracker:ITrackerState,
  recors:IRecorsState
  error?: any
};

export interface RecucerStateI {
  tracker: (state: ITrackerState, action: Action) => ITrackerState,
  recors: (state: IRecorsState, action: Action) => IRecorsState,
  error?: (state: IErrorState, action: Action) => IErrorState,
};
