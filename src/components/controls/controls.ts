/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   13-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 13-06-2017
 */

import { Component, Input } from '@angular/core';
import { FabContainer } from 'ionic-angular';

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

  constructor() {
  }

  save(data: any, fab: FabContainer):void {
    fab.close();
    console.log('save max speed->', data.innerHTML)
  }

  stats(fab: FabContainer):void{
    fab.close();
    console.info('TODO: show stats')
  }
}
