import { Component, Input, forwardRef } from '@angular/core';
import { PixiText } from '../pixi-text/pixi-text';
/**
 * inherits PIXI.Text
 */
@Component({
    selector: 'pixi-text',
    templateUrl: './pixi-text.component.html',
    styleUrls: ['./pixi-text.component.css'],
    inputs: [
        'style',
        'canvas',
        'text',
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
    providers: [{provide: PixiText, useExisting: forwardRef(() => PixiTextComponent)}]
})
export class PixiTextComponent extends PixiText {
    constructor() {
        super();
    }
}
