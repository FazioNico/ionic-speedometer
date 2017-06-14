/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   13-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

import { Component, Input } from '@angular/core';
import { FabContainer } from 'ionic-angular';

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
    private mainActions: MainActions
  ) {
    this.userInfo = this.store.select((state:AppStateI) => state.auth)
  }

  save(data: any, fab: FabContainer):void {
    fab.close();
    console.log('TODO: save max speed->', data.innerHTML)
    this.store.dispatch(<Action>this.mainActions.checkAuth())
    // this.store.dispatch(<Action>{
    //           type: 'SAVE_TEST',
    //           payload: data.innerHTML
    //       })
  }

  stats(fab: FabContainer):void{
    fab.close();
    console.info('TODO: show stats')
  }
}
