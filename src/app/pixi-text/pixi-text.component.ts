import { Component, Input } from '@angular/core';

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
    ]
})
export class PixiTextComponent extends PIXI.Text {
    constructor() {
        super();
    }
}
