import {
    Directive,
    AfterViewInit,
    AfterContentInit,
    Input,
    ContentChildren,
    ViewContainerRef,
    ComponentFactoryResolver,
    Renderer2,
    ComponentRef
} from '@angular/core';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiApplicationComponent } from '../pixi-application/pixi-application.component';
import { PixiLayerComponent } from '../pixi-layer/pixi-layer.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphics } from '../pixi-graphics/pixi-graphics';
import { IPixiInitializer } from '../pixi-initializer/pixi-initializer';
import { IPixiLayer } from '../pixi-layer/pixi-layer';
import { PixiApplication } from '../pixi-application/pixi-application';
import { PixiSprite } from '../pixi-sprite/pixi-sprite';
import { PixiContainer } from '../pixi-container/pixi-container';
import { PixiGraphicsWrapper } from '../pixi-graphicswrapper/pixi-graphicswrapper';
import { PixiText } from '../pixi-text/pixi-text';
/**
 * responsible for initialization of PixiApplicationComponent
 * in creation of template-pixi stack
 */
@Directive({
    selector: '[pixi-initializer]'
})
export class PixiInitializerDirective implements IPixiInitializer {

    /**
     * refers to PixiApplicationComponent created in PixiInitializer
     */
    applicationComponent: ComponentRef<PixiApplicationComponent> ;

    /**
     * refers to content children with type of PixiSpriteComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiSprite) sprites;

    /**
     * refers to content children with type of PixiContainerComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiContainer) containers;

    /**
     * refers to content children with type of PixiGraphicsWrapperComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiGraphicsWrapper) graphicswrappers;

    /**
     * refers to content children with type of PixiGraphicsComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiGraphics) graphicslist;

    /**
     * refers to content children with type of PixiTextComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiText) texts;

    constructor(
        protected vcr: ViewContainerRef,
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected renderer: Renderer2
    ) {}

    ngAfterContentInit(): void {
        setTimeout(() => {
            this.initialize(), 0;
        });
    }

    initialize() {
        this.initializePixiApplication();
        this.stylingInitializer();
        this.initializePixiLayers();       
    }

    initializePixiApplication() {
        let factory = this.componentFactoryResolver.resolveComponentFactory(
            PixiApplicationComponent
        );
        let componentRef: ComponentRef<PixiApplicationComponent> = this.vcr.createComponent(factory);
        (<PixiApplicationComponent>componentRef.instance).height = this.measureHeight();
        (<PixiApplicationComponent>componentRef.instance).width = this.measureWidth();
        (<PixiApplicationComponent>componentRef.instance).sprites = this.sprites;
        (<PixiApplicationComponent>componentRef.instance).containers = this.containers;
        (<PixiApplicationComponent>componentRef.instance).graphicswrappers = this.graphicswrappers;
        (<PixiApplicationComponent>componentRef.instance).texts = this.texts;
        (<PixiApplicationComponent>componentRef.instance).graphicslist = this.graphicslist;
        this.applicationComponent = componentRef;
    }

    initializePixiLayers() {
        let layer1: IPixiLayer = this.createPixiLayer(2);
        let children = this.vcr.element.nativeElement.children;
        let looping: boolean = true;
        while (looping) {
            let counter = 0;
            for (var i = 0; i < children.length; i++) {
                if (children[i].tagName == 'PIXI-LAYER') {
                    counter++;
                    continue;
                }
                this.renderer.appendChild(layer1.getViewContainerRef().element.nativeElement, children[i]);
            }
            if (counter == children.length) looping = false;
        }
        let layer2: IPixiLayer = this.createPixiLayer(1);
        this.renderer.appendChild(
            layer2.getViewContainerRef().element.nativeElement,
            this.applicationComponent.injector.get(PixiApplicationComponent).getViewContainerRef().element.nativeElement
        );
    }

    stylingInitializer() {
        this.vcr.element.nativeElement.style =
        'display:block;width:' +
        this.measureWidth() +
        'px;height:' +
        this.measureHeight() +
        'px';
    }

    createPixiLayer(zindex: number): IPixiLayer {
        let factory = this.componentFactoryResolver.resolveComponentFactory(PixiLayerComponent);
        let componentRef = this.vcr.createComponent(factory);
        (<PixiLayerComponent>componentRef.instance).zindex = zindex;
        this.renderer.appendChild(
            this.vcr.element.nativeElement,
            componentRef.injector.get(PixiLayerComponent).getViewContainerRef().element.nativeElement
        );
        return componentRef.injector.get(PixiLayerComponent);
    }

    measureWidth(): number {
        return this.vcr.element.nativeElement.getBoundingClientRect().width;
    }

    measureHeight(): number {
        return this.vcr.element.nativeElement.getBoundingClientRect().height;
    }    
    
}
