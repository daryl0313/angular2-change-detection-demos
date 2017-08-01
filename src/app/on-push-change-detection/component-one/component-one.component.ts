// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator

import {AfterViewChecked, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-one',
    host: {
        '(click)': 'triggerChangeDetection()'
    },
    template: `
        <a class="click-me">Cmp1</a>

        <ul>
            <li>
                <cmp-two></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `
})
export class ComponentOne implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

    triggerChangeDetection() {
    }
}
