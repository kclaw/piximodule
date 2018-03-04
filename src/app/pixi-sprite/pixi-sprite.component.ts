import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PixiSprite } from '../pixi-sprite/pixi-sprite';
import 'pixi.js';

/**
 * inherits PIXI.Sprite
 * {@link http://pixijs.download/dev/docs/PIXI.Sprite.html PIXI.Sprite}
 */
@Component({
    selector: 'pixi-sprite',
    templateUrl: './pixi-sprite.component.html',
    styleUrls: ['./pixi-sprite.component.css'],
    inputs: [
        'x',
        'y',
        'alpha',
        'anchor',
        'blendMode',
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
    providers: [{provide: PixiSprite, useExisting: forwardRef(() => PixiSpriteComponent)}]
})
export class PixiSpriteComponent extends PixiSprite implements OnInit {
    /**
     * input for url of image, and
     * is presented to replace function of static fromImage method
     */
    @Input() fromImageUrl: string;

    constructor() { super(); }

    ngOnInit() {
        if (null != this.fromImageUrl) this.texture = PIXI.Texture.fromImage(this.fromImageUrl);
    }
}
