// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import { AfterViewChecked, Component, ElementRef, NgZone } from '@angular/core';
import { toggleClass } from '../../toggle-class.service';

@Component({
    selector: 'cmp-six',
    host: {
        '(click)': 'triggerChangeDetection()'
    },
    template: `
        <a class="click-me">Cmp6</a>
    `
})
export class ComponentSix implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone, 1000);
    }

    triggerChangeDetection() {
    }
}
