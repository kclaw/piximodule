import {
    Component,
    OnInit,
    ViewContainerRef,
    AfterContentInit,
    ElementRef,
    ContentChildren,
    QueryList
} from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';

@Component({
    selector: 'pixi-application',
    templateUrl: './pixi-application.component.html',
    styleUrls: ['./pixi-application.component.css']
})
export class PixiApplicationComponent implements OnInit {
    width: number;
    height: number;
    application: PIXI.Application;
    options: PIXI.ApplicationOptions;
    sprites: QueryList<PixiSpriteComponent>;
    texts: QueryList<PixiTextComponent>;
    containers: QueryList<PixiContainerComponent>;
    graphicswrappers: QueryList<PixiGraphicsWrapperComponent>;

    constructor(public vcr: ViewContainerRef) {}

    ngOnInit() {
        this.application = new PIXI.Application(this.width, this.height, this.options);
        this.vcr.element.nativeElement.appendChild(this.application.view);
        this.vcr.element.nativeElement.style = 'position:absolute;';
        this.containers.forEach(container => {
            this.application.stage.addChild(container);
        });
        this.sprites.forEach(sprite => {
            this.application.stage.addChild(sprite);
        });
        this.texts.forEach(text => {
            this.application.stage.addChild(text);
        });
        this.graphicswrappers.forEach(wrapper => {
            wrapper.graphicslist.forEach(graphics => {
                this.application.stage.addChild(graphics);
            });
        });
    }
}
