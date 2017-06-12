/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   12-06-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 12-06-2017
 */

/**
 * Base on existing ng-module. See: https://github.com/MeetmeLeave/ng-canvas-gauges                                  [description]
 */

import {Component, NgZone, ElementRef} from '@angular/core';
import {BaseGauge} from './base-gauge';
import * as CanvasGauges from 'canvas-gauges';

/**
 * Implements Radial Gauge from the original library
 */
@Component({
    selector: 'radial-gauge',
    template: '<canvas #gauge></canvas>'
})
export class RadialGaugeComponent extends BaseGauge<CanvasGauges.RadialGauge,CanvasGauges.RadialGaugeOptions> {
    constructor(el: ElementRef, zone: NgZone) {
        super(el, zone);
    }

    ngOnInit() {
        this.gauge = new CanvasGauges.RadialGauge(this.getOptions()).draw();
    }
}
