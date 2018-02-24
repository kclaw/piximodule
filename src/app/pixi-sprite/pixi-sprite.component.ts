import { Component, OnInit, Input } from '@angular/core';
import 'pixi.js';

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
export class PixiSpriteComponent extends PIXI.Sprite implements OnInit {
    @Input() fromImageUrl: string;

    constructor() {
        super();
    }

    ngOnInit() {
        if (null != this.fromImageUrl) this.texture = PIXI.Texture.fromImage(this.fromImageUrl);
    }
}
