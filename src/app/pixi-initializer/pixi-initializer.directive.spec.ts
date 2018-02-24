import { TestBed, inject } from '@angular/core/testing';
import { ViewContainerRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';
import { PixiInitializerDirective } from './pixi-initializer.directive';

describe('PixiInitializerDirective', () => {
    let vcr: ViewContainerRef;
    let cfr: ComponentFactoryResolver;
    let r: Renderer2;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PixiInitializerDirective],
            providers: [ViewContainerRef, ComponentFactoryResolver, Renderer2]
        });
        vcr = TestBed.get(ViewContainerRef);
        cfr = TestBed.get(ComponentFactoryResolver);
        r = TestBed.get(Renderer2);
    });
    it('should create an instance', () => {
        let directive = new PixiInitializerDirective(vcr, cfr, r);
        expect(directive).toBeTruthy();
    });
});
