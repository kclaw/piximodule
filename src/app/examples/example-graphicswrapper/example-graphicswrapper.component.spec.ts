import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleGraphicswrapperComponent } from './example-graphicswrapper.component';

describe('ExampleGraphicswrapperComponent', () => {
    let component: ExampleGraphicswrapperComponent;
    let fixture: ComponentFixture<ExampleGraphicswrapperComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ExampleGraphicswrapperComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleGraphicswrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
