import { Component, OnInit, forwardRef } from '@angular/core';
import { PixiGraphicsWrapperComponent } from '../../pixi-graphicswrapper/pixi-graphicswrapper.component';

@Component({
    selector: 'example-graphicswrapper',
    templateUrl: './example-graphicswrapper.component.html',
    styleUrls: ['./example-graphicswrapper.component.css'],
    providers: [
        {
            provide: PixiGraphicsWrapperComponent,
            useExisting: forwardRef(() => ExampleGraphicswrapperComponent)
        }
    ]
})
export class ExampleGraphicswrapperComponent extends PixiGraphicsWrapperComponent
    implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {}

    apply(name: string, graphics: PIXI.Graphics) {
        if (name == 'hi') {
            graphics.beginFill(0xff3300);
            graphics.lineStyle(4, 0xffd900, 1);

            // draw a shape
            graphics.moveTo(50, 50);
            graphics.lineTo(250, 50);
            graphics.lineTo(100, 100);
            graphics.lineTo(50, 50);
            graphics.endFill();

            // set a fill and a line style again and draw a rectangle
            graphics.lineStyle(2, 0x0000ff, 1);
            graphics.beginFill(0xff700b, 1);
            graphics.drawRect(50, 250, 120, 120);

            // draw a rounded rectangle
            graphics.lineStyle(2, 0xff00ff, 1);
            graphics.beginFill(0xff00bb, 0.25);
            graphics.drawRoundedRect(150, 450, 300, 100, 15);
            graphics.endFill();

            // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
            graphics.lineStyle(0);
            graphics.beginFill(0xffff0b, 0.5);
            graphics.drawCircle(470, 90, 60);
            graphics.endFill();
        }
    }
}
