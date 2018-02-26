/// <reference types="pixi.js" />
import { QueryList, AfterContentInit } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
/**
 * inherits PIXI.Container
 * {@link http://pixijs.download/dev/docs/PIXI.Container.html PIXI.Container}
 */
export declare class PixiContainerComponent extends PIXI.Container implements AfterContentInit {
    /**
     * refers to content children of PixiSpriteComponent in PixiContainerComponent
     */
    sprites: QueryList<PixiSpriteComponent>;
    /**
     * refers to content children of PixiGraphicsWrapperComponent in PixiContainerComponent
     */
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;
    /**
     * refers to content children of PixiTextComponent in PixiContainerComponent
     */
    texts: QueryList<PixiTextComponent>;
    constructor();
    ngAfterContentInit(): void;
}
