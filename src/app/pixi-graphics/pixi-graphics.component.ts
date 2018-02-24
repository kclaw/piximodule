import { Component, Input } from '@angular/core';

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
export class PixiGraphicsComponent extends PIXI.Graphics {
    constructor() {
        super();
    }
}
