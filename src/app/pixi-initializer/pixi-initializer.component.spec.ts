import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { PixiInitializerComponent } from './pixi-initializer.component';
import { DebugElement } from '@angular/core';
import { PixiApplicationComponent } from '../pixi-application/pixi-application.component';
import { PixiLayerComponent } from '../pixi-layer/pixi-layer.component';

describe('PixiInitializerComponent', () => {
    let component: PixiInitializerComponent;
    let fixture: ComponentFixture<PixiInitializerComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    PixiInitializerComponent,
                    PixiApplicationComponent,
                    PixiLayerComponent
                ]
            });

            TestBed.overrideModule(BrowserDynamicTestingModule, {
                set: {
                    entryComponents: [PixiApplicationComponent, PixiLayerComponent]
                }
            });
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PixiInitializerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialise pixi application in dom after initialiseApplication calling', () => {
        component.initializeApplication();
        fixture.detectChanges();
        let de: DebugElement = fixture.debugElement.query(By.css('pixi-application'));
        expect(de).toBeTruthy();
    });

    it('should create pixi layer in dom', () => {
        component.initializeApplication();
        fixture.detectChanges();
        let de: DebugElement = fixture.debugElement.query(By.css('pixi-layer'));
        expect(de).toBeTruthy();
    });

    it('should have positive width', () => {
        expect(component.measureWidth()).toBeGreaterThan(0);
    });

    it('should have positive height', () => {
        expect(component.measureHeight()).toBeGreaterThan(0);
    });
});
