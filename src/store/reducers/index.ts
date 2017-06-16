/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   11-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-06-2017
 */

 import { combineReducers, ActionReducer, Action } from '@ngrx/store';
  import { compose } from '@ngrx/core/compose';
  import { storeFreeze } from 'ngrx-store-freeze';

  import * as fromTracker from './trackerReducer';
  import * as fromRecors from './recorsReducer';
  import * as fromAuth from './authReducer';
  import * as fromNav from './navigationReducer';
  import * as fromStats from './statsReducer';
  import * as fromError from './errorReducer';

  import { AppStateI, RecucerStateI } from '../app-stats';

  declare let process: any; // Typescript compiler will complain without this

  let reducers:RecucerStateI = {
    auth: fromAuth.reducer,
    tracker: fromTracker.reducer,
    recors: fromRecors.reducer,
    nav: fromNav.reducer,
    statistics: fromStats.reducer,
    error: fromError.reducer
  };
  let developmentReducer:ActionReducer<AppStateI> = compose(storeFreeze, combineReducers)(reducers);
  let productionReducer: ActionReducer<AppStateI> = combineReducers(reducers);

  export function reducer(state: any, action: Action):AppStateI {
    let combineReducer:AppStateI = process.env.IONIC_ENV === 'prod' ? productionReducer(state, action) : developmentReducer(state, action);
    if(process.env.NODE_ENV === 'prod') { combineReducer = productionReducer(state, action) };
    return combineReducer
  }
