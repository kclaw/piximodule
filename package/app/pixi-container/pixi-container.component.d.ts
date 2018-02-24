/// <reference types="pixi.js" />
import { QueryList, AfterContentInit } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
export declare class PixiContainerComponent extends PIXI.Container implements AfterContentInit {
    sprites: QueryList<PixiSpriteComponent>;
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;
    texts: QueryList<PixiTextComponent>;
    constructor();
    ngAfterContentInit(): void;
}
