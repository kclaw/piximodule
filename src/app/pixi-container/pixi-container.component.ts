import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiApplicationComponent } from '../pixi-application/pixi-application.component';

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
        ' interactive',
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
    ]
})
export class PixiContainerComponent extends PIXI.Container implements AfterContentInit {
    @ContentChildren(PixiSpriteComponent) sprites: QueryList<PixiSpriteComponent>;

    @ContentChildren(PixiGraphicsWrapperComponent)
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;

    @ContentChildren(PixiTextComponent) texts: QueryList<PixiTextComponent>;

    constructor() {
        super();
    }

    ngAfterContentInit(): void {
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
    }
}
