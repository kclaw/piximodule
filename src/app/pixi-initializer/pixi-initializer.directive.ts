import {
    Directive,
    AfterViewInit,
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
import { PixiGraphics } from '../pixi-graphics/pixi-graphics';

/**
 * responsible for initialization of PixiApplicationComponent
 * in creation of template-pixi stack
 */
@Directive({
    selector: '[pixi-initializer]'
})
export class PixiInitializerDirective {
    /**
     * refers to content children with type of PixiSpriteComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiSpriteComponent) sprites;

    /**
     * refers to content children with type of PixiContainerComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiContainerComponent) containers;

    /**
     * refers to content children with type of PixiGraphicsWrapperComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiGraphicsWrapperComponent) graphicswrappers;

    /**
     * refers to content children with type of PixiGraphicsComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiGraphics) graphicslist;

    /**
     * refers to content children with type of PixiTextComponent in PixiInitializerDirective
     */
    @ContentChildren(PixiTextComponent) texts;

    constructor(
        protected vcr: ViewContainerRef,
        protected componentFactoryResolver: ComponentFactoryResolver,
        protected renderer: Renderer2
    ) {}

    ngAfterContentInit(): void {
        setTimeout(() => {
            this.initializeApplication(), 0;
        });
    }

    /**
     * Dynamic initialize PixiInitializerComponent
     */
    initializeApplication() {
        let factory = this.componentFactoryResolver.resolveComponentFactory(
            PixiApplicationComponent
        );
        let componentRef = this.vcr.createComponent(factory);
        (<PixiApplicationComponent>componentRef.instance).height = this.measureHeight();
        (<PixiApplicationComponent>componentRef.instance).width = this.measureWidth();
        (<PixiApplicationComponent>componentRef.instance).sprites = this.sprites;
        (<PixiApplicationComponent>componentRef.instance).containers = this.containers;
        (<PixiApplicationComponent>componentRef.instance).graphicswrappers = this.graphicswrappers;
        (<PixiApplicationComponent>componentRef.instance).texts = this.texts;
        (<PixiApplicationComponent>componentRef.instance).graphicslist = this.graphicslist;

        this.vcr.element.nativeElement.style =
            'display:block;width:' +
            this.measureWidth() +
            'px;height:' +
            this.measureHeight() +
            'px';
        let layer1: PixiLayerComponent = this.createPixiLayer(2);
        let children = this.vcr.element.nativeElement.children;
        let looping: boolean = true;
        while (looping) {
            let counter = 0;
            for (var i = 0; i < children.length; i++) {
                if (children[i].tagName == 'PIXI-LAYER') {
                    counter++;
                    continue;
                }
                this.renderer.appendChild(layer1.vcr.element.nativeElement, children[i]);
            }
            if (counter == children.length) looping = false;
        }
        let layer2: PixiLayerComponent = this.createPixiLayer(1);
        this.renderer.appendChild(
            layer2.vcr.element.nativeElement,
            componentRef.injector.get(PixiApplicationComponent).vcr.element.nativeElement
        );
    }

    /**
     * Create a PixiLayerComponent
     * @param zindex number; zindex parameter specified the stack order of a pixilayercomponent
     */
    createPixiLayer(zindex: number): PixiLayerComponent {
        let factory = this.componentFactoryResolver.resolveComponentFactory(PixiLayerComponent);
        let componentRef = this.vcr.createComponent(factory);
        (<PixiLayerComponent>componentRef.instance).zindex = zindex;
        this.renderer.appendChild(
            this.vcr.element.nativeElement,
            componentRef.injector.get(PixiLayerComponent).vcr.element.nativeElement
        );
        return componentRef.injector.get(PixiLayerComponent);
    }

    /**
     * @return positive number; width of this component
     */
    measureWidth(): number {
        return this.vcr.element.nativeElement.getBoundingClientRect().width;
    }

    /**
     * @return positive number; height of this component
     */
    measureHeight(): number {
        return this.vcr.element.nativeElement.getBoundingClientRect().height;
    }
}
