import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiLayerComponent } from './pixi-layer.component';

describe('PixiLayerComponent', () => {
    let component: PixiLayerComponent;
    let fixture: ComponentFixture<PixiLayerComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [PixiLayerComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PixiLayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
