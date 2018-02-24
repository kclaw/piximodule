/// <reference types="pixi.js" />
import { OnInit, AfterContentInit, QueryList } from '@angular/core';
import { PixiGraphicsComponent } from '../pixi-graphics/pixi-graphics.component';
import { PixiGraphicsWrapper } from './pixi-graphicswrapper';
export declare class PixiGraphicsWrapperComponent implements OnInit, AfterContentInit, PixiGraphicsWrapper {
    graphicslist: QueryList<PixiGraphicsComponent>;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    apply(name: string, graphics: PIXI.Graphics): void;
}
