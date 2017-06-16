/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   15-03-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-06-2017
*/

import { Action } from "@ngrx/store";

import { ITrackerState } from '../store/reducers/trackerReducer';
import { IRecorsState } from '../store/reducers/recorsReducer';
import { IAuthState } from '../store/reducers/authReducer';
import { INavState } from '../store/reducers/navigationReducer';
import { IStatsState } from '../store/reducers/statsReducer';
import { IErrorState } from '../store/reducers/errorReducer';

export interface AppStateI {
  tracker:ITrackerState,
  recors:IRecorsState,
  auth:IAuthState,
  nav:INavState,
  statistics:IStatsState
  error?: any
};

export interface RecucerStateI {
  tracker: (state: ITrackerState, action: Action) => ITrackerState,
  recors: (state: IRecorsState, action: Action) => IRecorsState,
  auth: (state: IAuthState, action: Action) => IAuthState,
  nav: (state: INavState, action: Action) => INavState,
  statistics: (state: IStatsState, action: Action) => IStatsState,
  error?: (state: IErrorState, action: Action) => IErrorState,
};
