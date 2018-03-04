import {
    Component,
    OnInit,
    ViewContainerRef,
    AfterContentInit,
    ElementRef,
    ContentChildren,
    QueryList,
    forwardRef
} from '@angular/core';
import 'pixi.js';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiGraphics } from '../pixi-graphics/pixi-graphics';
import { PixiApplication } from './pixi-application';
import { PixiGraphicsWrapper } from '../pixi-graphicswrapper/pixi-graphicswrapper';
import { PixiContainer } from '../pixi-container/pixi-container';
import { PixiText } from '../pixi-text/pixi-text';
import { PixiSprite } from '../pixi-sprite/pixi-sprite';

/**
 * have reference and delegation of PIXI.Application
 * {@link http://pixijs.download/dev/docs/PIXI.Application.html PIXI.Application}
 */
@Component({
    selector: 'pixi-application',
    templateUrl: './pixi-application.component.html',
    styleUrls: ['./pixi-application.component.css'],
    providers: [{provide: PixiApplication, useExisting: forwardRef(() => PixiApplicationComponent)}]
})
export class PixiApplicationComponent extends PixiApplication implements OnInit {
 
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
    sprites: QueryList<PixiSprite>;

    /**
     * refers to PixiTextComponent going to be registered in PIXI.Application
     */
    texts: QueryList<PixiText>;

    /**
     * refers to PixiContainerComponent going to be registered in PIXI.Application
     */
    containers: QueryList<PixiContainer>;

    /**
     * refers to PixiGraphicsWrapper going to be registered in PIXI.Application
     */
    graphicswrappers: QueryList<PixiGraphicsWrapper>;

    /**
     * refers to PixiGraphicsComponent going to be registered in PIXI.Application
     */
    graphicslist: QueryList<PixiGraphics>;

    constructor(private vcr: ViewContainerRef) { super(); }

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
        this.graphicswrappers.forEach(wrapper => {console.log('hi');
            wrapper.getGraphicsList().forEach(graphics => {
                console.log(<PIXI.Graphics>graphics);
                this.application.stage.addChild(<PIXI.Graphics>graphics);
            });
        });
        this.graphicslist.forEach(graphics => {
            this.application.stage.addChild(graphics);
        });
    }

    layout() {}

    getViewContainerRef(): ViewContainerRef {
        return this.vcr;
    }
}
