import { AfterContentInit, ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import 'pixi.js';
import { PixiInitializerDirective } from './pixi-initializer.directive';
export declare class PixiInitializerComponent extends PixiInitializerDirective implements AfterContentInit {
    protected vcr: ViewContainerRef;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    constructor(vcr: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2);
}
