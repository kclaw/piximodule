import { ViewContainerRef } from '@angular/core';
/**
 * responsible for layering in template-pixi stack
 */
export declare class PixiLayerComponent {
    vcr: ViewContainerRef;
    /**
     * variable for specifying the stack order of PixiLayerComponent
     * {@link https://www.w3schools.com/cssref/pr_pos_z-index.asp CSS z-index Property}
     */
    zindex: number;
    constructor(vcr: ViewContainerRef);
}
