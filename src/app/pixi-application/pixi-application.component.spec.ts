import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiApplicationComponent } from './pixi-application.component';

describe('PixiApplicationComponent', () => {
  let component: PixiApplicationComponent;
  let fixture: ComponentFixture<PixiApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixiApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
