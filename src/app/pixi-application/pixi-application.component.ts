import { Component, OnInit, ViewContainerRef, AfterContentInit, ElementRef, ContentChildren } from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
@Component({
  selector: 'pixi-application',
  templateUrl: './pixi-application.component.html',
  styleUrls: ['./pixi-application.component.css']
})
export class PixiApplicationComponent implements OnInit, AfterContentInit {
  @ContentChildren(Component) children: Component;
  width: number;
  height: number;


  ngAfterContentInit(): void {
    this.width = this.elem.nativeElement.getBoundingClientRect().width;
    this.height = this.elem.nativeElement.getBoundingClientRect().height; 
    console.log(this.elem);
    console.log(this.height);
    console.log(this.width);
    console.log(this.elem.nativeElement.offsetWidth);
    console.log(this.children);
    console.log(this.vcr);
    /*const children: HTMLCollection= this.elem.nativeElement.children;
    const itemHeights = Array.from(children)
    .map(x => x.getBoundingClientRect().height);
    console.log(children);
    console.log(itemHeights);*/
    const renderer = new PIXI.Application(this.width, this.height);
    //document.body.appendChild(renderer.view);
    this.elem.nativeElement.appendChild(renderer.view);
    renderer.view.style.position = 'absolute';
    let text = document.createElement("input");
    text.style.position='absolute';
    this.elem.nativeElement.appendChild(text);
    const stage = new PIXI.Container();
  }

  constructor(private elem: ElementRef,private vcr: ViewContainerRef) {}

  ngOnInit() {
      let div = document.createElement('div');
      let content = document.createElement('ng-content');
      div.appendChild(content);
      this.elem.nativeElement.appendChild(div);
  }



}
