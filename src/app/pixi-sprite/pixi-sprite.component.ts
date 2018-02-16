import { Component, OnInit } from '@angular/core';
import 'pixi.js';

@Component({
  selector: 'pixi-sprite',
  templateUrl: './pixi-sprite.component.html',
  styleUrls: ['./pixi-sprite.component.css']
})
export class PixiSpriteComponent implements OnInit {

  sprite: PIXI.Sprite;

  constructor() { }

  ngOnInit() {
      this.sprite = new PIXI.Sprite();
  }

}
