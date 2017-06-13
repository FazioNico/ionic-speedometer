/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   30-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs/Rx';

import { AppStateI } from "../../store/app-stats";
import { ITrackerState } from "../../store/reducers/trackerReducer";
import { IRecorsState } from "../../store/reducers/recorsReducer";
import { MainActions } from '../../store/actions/mainActions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public trackerInfo:Observable<ITrackerState>;
  public recorsInfo:Observable<IRecorsState>;

  constructor (
    public navCtrl: NavController,
    private store: Store<any>,
    private mainActions: MainActions
  ) {
    this.trackerInfo = this.store.select((state:AppStateI) => state.tracker)
    this.recorsInfo = this.store.select((state:AppStateI) => state.recors)
  }

  ngOnInit(){
    this.start()
    //console.log('test')
  }

  start():void{
    this.store.dispatch(<Action>this.mainActions.startTracking())
  }

  stop():void{
    // this.store.dispatch(<Action>this.mainActions.stopTracking())
  }

}
