import { Directive, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { IPixiGraphicsWrapper, IPixiGraphicsInvoker } from './pixi-graphicswrapper';
import { PixiGraphics } from '../pixi-graphics/pixi-graphics';

@Directive({
    selector: '[pixi-graphicswrapper]'
})
export class PixiGraphicsWrapperDirective implements IPixiGraphicsWrapper {

    /**
     * refers to graphicswrapper from input
     */
    @Input('pixi-graphicswrapper') graphicsinvoker: IPixiGraphicsInvoker;

    @ContentChildren(PixiGraphics) pixigraphics: QueryList<PixiGraphics>;

    constructor() {}

    ngAfterContentInit(): void {
        this.getGraphicsList().forEach(graphics => {
            this.apply(graphics.name, graphics);
        });
    }

    apply(name: string, graphics: PIXI.Graphics) {
        this.graphicsinvoker.apply(name, graphics);
    }

    getGraphicsList(): PixiGraphics[] {
        return this.pixigraphics.toArray();
    }
    
}
