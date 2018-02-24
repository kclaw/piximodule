import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiGraphicsWrapperComponent } from './pixi-graphicswrapper.component';

describe('GraphicsWrapperComponent', () => {
    let component: PixiGraphicsWrapperComponent;
    let fixture: ComponentFixture<PixiGraphicsWrapperComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [PixiGraphicsWrapperComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PixiGraphicsWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
