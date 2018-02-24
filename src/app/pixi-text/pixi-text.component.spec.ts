import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiTextComponent } from './pixi-text.component';

describe('PixiTextComponent', () => {
    let component: PixiTextComponent;
    let fixture: ComponentFixture<PixiTextComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [PixiTextComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PixiTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have text property allowed for input', () => {
        component.text = 'testing';
        fixture.detectChanges();
        expect(component.text).toEqual('testing');
    });

    it('should have style property allowed for input', () => {
        component.style = new PIXI.TextStyle({
            stroke: '#FCFF00',
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 'white',
            align: 'center'
        });
        fixture.detectChanges();
        expect(component.style).toEqual(
            new PIXI.TextStyle({
                stroke: '#FCFF00',
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 'white',
                align: 'center'
            })
        );
    });
});
