import { Component, Input, ViewContainerRef, HostBinding } from '@angular/core';

/**
 * responsible for layering in template-pixi stack
 */
@Component({
    selector: 'pixi-layer',
    templateUrl: './pixi-layer.component.html',
    styleUrls: ['./pixi-layer.component.css']
})
export class PixiLayerComponent {
    /**
     * variable for specifying the stack order of PixiLayerComponent
     * {@link https://www.w3schools.com/cssref/pr_pos_z-index.asp CSS z-index Property}
     */
    @HostBinding('style.z-index') zindex: number;

    constructor(public vcr: ViewContainerRef) {}
}
