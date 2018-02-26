/// <reference types="pixi.js" />
import { OnInit, ViewContainerRef, QueryList } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
/**
 * have reference and delegation of PIXI.Application
 * {@link http://pixijs.download/dev/docs/PIXI.Application.html PIXI.Application}
 */
export declare class PixiApplicationComponent implements OnInit {
    vcr: ViewContainerRef;
    /**
     * refers to width of PIXI.Application
     */
    width: number;
    /**
     * refers to height of PIXI.Application
     */
    height: number;
    /**
     * refers to instance of PIXI.Application
     */
    application: PIXI.Application;
    /**
     * refers to options parameter given to constructor of PIXI.Application
     */
    options: PIXI.ApplicationOptions;
    /**
     * refers to PixiSpriteComponent going to be registered in PIXI.Application
     */
    sprites: QueryList<PixiSpriteComponent>;
    /**
     * refers to PixiTextComponent going to be registered in PIXI.Application
     */
    texts: QueryList<PixiTextComponent>;
    /**
     * refers to PixiContainerComponent going to be registered in PIXI.Application
     */
    containers: QueryList<PixiContainerComponent>;
    /**
     * refers to PixiGraphicsWrapper going to be registered in PIXI.Application
     */
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;
    constructor(vcr: ViewContainerRef);
    ngOnInit(): void;
}
