/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-06-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs/Rx';

import { AppStateI } from "../../store/app-stats";
import { MainActions } from '../../store/actions/mainActions';

/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'ProfilModal',
  segment: '/profil'
})
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  public userInfo:Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private store: Store<any>,
    private mainActions: MainActions
  ) {
    this.userInfo = this.store.select((state:AppStateI) => state.auth)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  logout():void {
    this.viewCtrl.dismiss();
    this.store.dispatch(<Action>{type: MainActions.LOGOUT, payload:null})
  }

  dismiss():void {
    this.viewCtrl.dismiss();
    this.store.dispatch(<Action>{type: 'CLOSE_MODAL', payload:null})
  }
}
