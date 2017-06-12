/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   12-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-06-2017
 */

/**
 * Refactoring existing ng-module for Sarari support see: https://github.com/MeetmeLeave/ng-canvas-gauges/issues/4
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { RadialGaugeComponent } from './radial-gauge';

@NgModule({
  declarations: [
    RadialGaugeComponent
  ],
  exports: [
    RadialGaugeComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
 export class NgzioGaugeComponentModule {}
