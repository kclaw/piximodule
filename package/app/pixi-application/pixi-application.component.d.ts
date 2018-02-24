/// <reference types="pixi.js" />
import { OnInit, ViewContainerRef, QueryList } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
export declare class PixiApplicationComponent implements OnInit {
    vcr: ViewContainerRef;
    width: number;
    height: number;
    application: PIXI.Application;
    options: PIXI.ApplicationOptions;
    sprites: QueryList<PixiSpriteComponent>;
    texts: QueryList<PixiTextComponent>;
    containers: QueryList<PixiContainerComponent>;
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;
    constructor(vcr: ViewContainerRef);
    ngOnInit(): void;
}
