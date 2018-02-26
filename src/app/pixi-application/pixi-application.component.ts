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

/** 
 * have reference and delegation of PIXI.Application
 * {@link http://pixijs.download/dev/docs/PIXI.Application.html PIXI.Application}
*/
@Component({
    selector: 'pixi-application',
    templateUrl: './pixi-application.component.html',
    styleUrls: ['./pixi-application.component.css']
})
export class PixiApplicationComponent implements OnInit {
    /**
     * refers to width of PIXI.Application
     */
    width: number;

    /**
     * refers to height of PIXI.Application
     */
    height: number;

    /**
     * refers to instance of PIXI.Application
     */
    application: PIXI.Application;

    /**
     * refers to options parameter given to constructor of PIXI.Application
     */
    options: PIXI.ApplicationOptions;

    /**
     * refers to PixiSpriteComponent going to be registered in PIXI.Application
     */
    sprites: QueryList<PixiSpriteComponent>;

    /**
     * refers to PixiTextComponent going to be registered in PIXI.Application
     */
    texts: QueryList<PixiTextComponent>;

    /**
     * refers to PixiContainerComponent going to be registered in PIXI.Application
     */
    containers: QueryList<PixiContainerComponent>;

    /**
     * refers to PixiGraphicsWrapper going to be registered in PIXI.Application
     */
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
