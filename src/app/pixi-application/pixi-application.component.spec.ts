import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PixiInitializerComponent } from '../pixi-initializer/pixi-initializer.component';
import { PixiApplicationComponent } from './pixi-application.component';
import { QueryList } from '@angular/core';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphics } from '../pixi-graphics/pixi-graphics';


describe('PixiApplicationComponent', () => {
    let component: PixiApplicationComponent;
    let fixture: ComponentFixture<PixiApplicationComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [PixiApplicationComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PixiApplicationComponent);
        component = fixture.componentInstance;
        component.width = 100;
        component.height = 100;
        component.containers = new QueryList<PixiContainerComponent>();
        component.graphicswrappers = new QueryList<PixiGraphicsWrapperComponent>();
        component.sprites = new QueryList<PixiSpriteComponent>();
        component.texts = new QueryList<PixiTextComponent>();
        component.graphicswrappers = new QueryList<PixiGraphicsWrapperComponent>();
        component.graphicslist = new QueryList<PixiGraphics>();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have an application after init', () => {
        component.ngOnInit();
        expect(component.application).toBeTruthy();
    });
});
