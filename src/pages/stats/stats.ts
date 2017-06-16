/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-06-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';

import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs/Rx';

import { AppStateI } from "../../store/app-stats";
import { MainActions } from '../../store/actions/mainActions';

/**
 * Generated class for the StatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'StatsModal',
  segment: '/stats'
})
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  public recorsInfo:Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private store: Store<any>,
    private mainActions: MainActions
  ) {
    this.recorsInfo = this.store.select((state:AppStateI) => state.statistics)
    this.store.dispatch(<Action>{type: 'GET_DATAS_ARRAY', payload:'speedometer'})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

  dismiss():void {
    this.viewCtrl.dismiss();
    this.store.dispatch(<Action>{type: 'CLOSE_MODAL', payload:null})
  }

}
