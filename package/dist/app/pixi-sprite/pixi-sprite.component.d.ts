/// <reference types="pixi.js" />
import { OnInit } from '@angular/core';
import 'pixi.js';
/**
 * inherits PIXI.Sprite
 * {@link http://pixijs.download/dev/docs/PIXI.Sprite.html PIXI.Sprite}
 */
export declare class PixiSpriteComponent extends PIXI.Sprite implements OnInit {
    /**
     * input for url of image, and
     * is presented to replace function of static fromImage method
     */
    fromImageUrl: string;
    constructor();
    ngOnInit(): void;
}
