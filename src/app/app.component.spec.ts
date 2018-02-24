import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PixiApplicationComponent } from './pixi-application/pixi-application.component';
import { PixiSpriteComponent } from './pixi-sprite/pixi-sprite.component';
import { PixiTextComponent } from './pixi-text/pixi-text.component';
import { PixiModule } from './pixi-module/pixi-module.module';
import { By } from '@angular/platform-browser';
import { Example1Component } from './examples/example1/example1.component';
import { Example2Component } from './examples/example2/example2.component';
import { ExampleGraphicswrapperComponent } from './examples/example-graphicswrapper/example-graphicswrapper.component';

import 'pixi.js';
import { Example3Component } from './examples/example3/example3.component';
import { Example4Component } from './examples/example4/example4.component';
import { Example5Component } from './examples/example5/example5.component';
import { Example6Component } from './examples/example6/example6.component';

describe('AppComponent', () => {
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    AppComponent,
                    Example1Component,
                    Example2Component,
                    Example3Component,
                    Example4Component,
                    Example5Component,
                    Example6Component,
                    ExampleGraphicswrapperComponent
                ],
                imports: [PixiModule]
            }).compileComponents();
        })
    );
    it(
        'should create the app',
        async(() => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        })
    );
});
