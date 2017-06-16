/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   13-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-06-2017
 */

import { Component, Input } from '@angular/core';
import { FabContainer, AlertController } from 'ionic-angular';

import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs/Rx';

import { AppStateI } from "../../store/app-stats";
import { IAuthState } from "../../store/reducers/authReducer";
import { MainActions } from '../../store/actions/mainActions';

/**
 * Generated class for the ControlsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ngzio-controls',
  templateUrl: 'controls.html'
})
export class ControlsComponent {

  @Input() inputMax: any;

  public userInfo:Observable<IAuthState>

  constructor(
    private store: Store<any>,
    private mainActions: MainActions,
    public alertCtrl: AlertController
  ) {
    this.userInfo = this.store.select((state:AppStateI) => state.auth)
  }

  save(user:any, data: any, fab: FabContainer):void {
    fab.close();
    console.log('save max speed->', data.innerHTML, user)
    let alert = this.alertCtrl.create({
      title: 'Save Recors',
      subTitle: "Click on save to add your max speed to the recors list",
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Save',
        handler: () => {
          this.store.dispatch(<Action>{
                    type: 'SAVE_RECORS',
                    payload: {uid: user.id||null, max: data.innerHTML}
                })
        }
      }]
    });
    alert.present();
  }

  stats(fab: FabContainer):void{
    fab.close();
    console.info('TODO: show stats')
    this.store.dispatch(<Action>{ type: 'OPEN_MODAL', payload: 'StatsModal' })
  }

  profil(fab: FabContainer):void{
    fab.close();
    this.store.dispatch(<Action>{ type: 'OPEN_MODAL', payload: 'ProfilModal' })
  }

  doSignup(data: any, fab: FabContainer):void{
    fab.close();
    this.store.dispatch(<Action>{ type: 'OPEN_MODAL', payload: 'SignInModal' })
  }
}
