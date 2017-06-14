/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   15-03-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 14-06-2017
*/

import { Action } from "@ngrx/store";

import { ITrackerState } from '../store/reducers/trackerReducer';
import { IRecorsState } from '../store/reducers/recorsReducer';
import { IAuthState } from '../store/reducers/authReducer';
import { INavState } from '../store/reducers/navigationReducer';
import { IErrorState } from '../store/reducers/errorReducer';

export interface AppStateI {
  tracker:ITrackerState,
  recors:IRecorsState,
  auth:IAuthState,
  nav:INavState
  error?: any
};

export interface RecucerStateI {
  tracker: (state: ITrackerState, action: Action) => ITrackerState,
  recors: (state: IRecorsState, action: Action) => IRecorsState,
  auth: (state: IAuthState, action: Action) => IAuthState,
  nav: (state: INavState, action: Action) => INavState,
  error?: (state: IErrorState, action: Action) => IErrorState,
};
