import { Component, Input, forwardRef } from '@angular/core';
import { PixiGraphics } from './pixi-graphics';

/**
 * inherits PIXI.Graphics
 * {@link http://pixijs.download/dev/docs/PIXI.Graphics.html PIXI.Graphics}
 */
@Component({
    selector: 'pixi-graphics',
    templateUrl: './pixi-graphics.component.html',
    styleUrls: ['./pixi-graphics.component.css'],
    inputs: [
        'tint',
        'nativeLines',
        'lineWidth',
        'lineColor',
        'isMask',
        'fillAlpha',
        'boundsPadding',
        'blendMode',
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
    providers: [{provide: PixiGraphics, useExisting: forwardRef(() => PixiGraphicsComponent)}]
})
export class PixiGraphicsComponent extends PixiGraphics {
    constructor() {
        super();
    }
}
