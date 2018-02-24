/// <reference types="pixi.js" />
import { OnInit } from '@angular/core';
import 'pixi.js';
export declare class PixiSpriteComponent extends PIXI.Sprite implements OnInit {
    fromImageUrl: string;
    constructor();
    ngOnInit(): void;
}
