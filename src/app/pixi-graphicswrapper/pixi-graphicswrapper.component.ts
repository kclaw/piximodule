import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { PixiGraphicsComponent } from '../pixi-graphics/pixi-graphics.component';
import { PixiGraphicsWrapper } from './pixi-graphicswrapper';

/** 
 * responsible for controlling creation of graphics 
*/
@Component({
    selector: 'pixi-graphicswrapper',
    templateUrl: './pixi-graphicswrapper.component.html',
    styleUrls: ['./pixi-graphicswrapper.component.css']
})
export class PixiGraphicsWrapperComponent implements OnInit, AfterContentInit, PixiGraphicsWrapper {
    /**
     * refers to content children of PixiGraphicsComponent in PixiGraphicsWrapperComponent
     */
    @ContentChildren(PixiGraphicsComponent) graphicslist: QueryList<PixiGraphicsComponent>;

    constructor() {}

    ngOnInit() {}

    ngAfterContentInit(): void {
        this.graphicslist.forEach(graphics => {
            this.apply(graphics.name, graphics);
        });
    }

    apply(name: string, graphics: PIXI.Graphics) {}
}
