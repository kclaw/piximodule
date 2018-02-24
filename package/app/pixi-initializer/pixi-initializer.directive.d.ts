import { ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { PixiLayerComponent } from '../pixi-layer/pixi-layer.component';
export declare class PixiInitializerDirective {
    protected vcr: ViewContainerRef;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    sprites: any;
    containers: any;
    graphicswrappers: any;
    texts: any;
    constructor(vcr: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2);
    ngAfterContentInit(): void;
    /**
     * Dynamic initialize PixiInitializerComponent
     */
    initializeApplication(): void;
    /**
     * Create a PixiLayerComponent
     * @param zindex number; zindex parameter specified the stack order of a pixilayercomponent
     */
    createPixiLayer(zindex: number): PixiLayerComponent;
    /**
     * @return positive number; width of this component
     */
    measureWidth(): number;
    /**
     * @return positive number; height of this component
     */
    measureHeight(): number;
}
