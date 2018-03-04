import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, forwardRef } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiApplicationComponent } from '../pixi-application/pixi-application.component';
import { PixiGraphics } from '../pixi-graphics/pixi-graphics';
import { PixiContainer } from './pixi-container';
import { PixiSprite } from '../pixi-sprite/pixi-sprite';
import { PixiGraphicsWrapper } from '../pixi-graphicswrapper/pixi-graphicswrapper';
import { PixiText } from '../pixi-text/pixi-text';

/**
 * inherits PIXI.Container
 * {@link http://pixijs.download/dev/docs/PIXI.Container.html PIXI.Container}
 */
@Component({
    selector: 'pixi-container',
    templateUrl: './pixi-container.component.html',
    styleUrls: ['./pixi-container.component.css'],
    inputs: [
        'x',
        'y',
        'alpha',
        'buttonMode',
        'cacheAsBitmap',
        'children',
        'cursor',
        'filterArea',
        'filters',
        'height',
        'hitArea',
        'interactive',
        'interactiveChildren',
        'mask',
        'name',
        'pivot',
        'position',
        'renderable',
        'rotation',
        'scale',
        'skew',
        'transform',
        'visible',
        'width'
    ],
    providers: [{provide: PixiContainer, useExisting: forwardRef(() => PixiContainerComponent)}]
})
export class PixiContainerComponent extends PixiContainer implements AfterContentInit {
    /**
     * refers to content children of PixiSpriteComponent in PixiContainerComponent
     */
    @ContentChildren(PixiSprite) sprites: QueryList<PixiSpriteComponent>;

    /**
     * refers to content children of PixiGraphicsWrapperComponent in PixiContainerComponent
     */
    @ContentChildren(PixiGraphicsWrapper)
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;

    /**
     * refers to content children of PixiTextComponent in PixiContainerComponent
     */
    @ContentChildren(PixiText) texts: QueryList<PixiTextComponent>;

    /**
     * refers to content children of PixiGraphics in PixiContainerComponent
     */
    @ContentChildren(PixiGraphics) graphicslist: QueryList<PixiGraphics>;
    
    constructor() {
        super();
    }

    ngAfterContentInit(): void {
        this.layout();
    }

    layout() {
        this.sprites.forEach(sprite => {
            this.addChild(sprite);
        });
        this.graphicswrappers.forEach(wrapper => {
            wrapper.graphicslist.forEach(graphics => {
                this.addChild(graphics);
            });
        });
        this.texts.forEach(text => {
            this.addChild(text);
        });
        this.graphicslist.forEach(graphics => {
            this.addChild(graphics);
        });
    }
}
