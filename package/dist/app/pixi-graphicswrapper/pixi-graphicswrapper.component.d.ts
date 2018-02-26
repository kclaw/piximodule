/// <reference types="pixi.js" />
import { OnInit, AfterContentInit, QueryList } from '@angular/core';
import { PixiGraphicsComponent } from '../pixi-graphics/pixi-graphics.component';
import { PixiGraphicsWrapper } from './pixi-graphicswrapper';
/**
 * responsible for controlling creation of graphics
 */
export declare class PixiGraphicsWrapperComponent implements OnInit, AfterContentInit, PixiGraphicsWrapper {
    /**
     * refers to content children of PixiGraphicsComponent in PixiGraphicsWrapperComponent
     */
    graphicslist: QueryList<PixiGraphicsComponent>;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    apply(name: string, graphics: PIXI.Graphics): void;
}
