import {
    Component,
    AfterContentInit,
    Input,
    ContentChildren,
    ViewContainerRef,
    ComponentFactoryResolver,
    Renderer2
} from '@angular/core';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiApplicationComponent } from '../pixi-application/pixi-application.component';
import { PixiLayerComponent } from '../pixi-layer/pixi-layer.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import 'pixi.js';
import { PixiInitializerDirective } from './pixi-initializer.directive';

@Component({
    selector: 'pixi-initializer',
    templateUrl: './pixi-initializer.component.html',
    styleUrls: ['./pixi-initializer.component.css']
})
export class PixiInitializerComponent extends PixiInitializerDirective implements AfterContentInit {
    constructor(
        protected vcr: ViewContainerRef,
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected renderer: Renderer2
    ) {
        super(vcr, componentFactoryResolver, renderer);
    }
}
