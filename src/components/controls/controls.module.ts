import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlsComponent } from './controls';

@NgModule({
  declarations: [
    ControlsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ControlsComponent),
  ],
  exports: [
    ControlsComponent
  ]
})
export class ControlsComponentModule {}
