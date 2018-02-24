import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { PixiGraphicsComponent } from '../pixi-graphics/pixi-graphics.component';
import { PixiGraphicsWrapper } from './pixi-graphicswrapper';

@Component({
    selector: 'pixi-graphicswrapper',
    templateUrl: './pixi-graphicswrapper.component.html',
    styleUrls: ['./pixi-graphicswrapper.component.css']
})
export class PixiGraphicsWrapperComponent implements OnInit, AfterContentInit, PixiGraphicsWrapper {
    @ContentChildren(PixiGraphicsComponent) graphicslist: QueryList<PixiGraphicsComponent>;

    constructor() {}

    ngOnInit() {}

    ngAfterContentInit(): void {
        this.graphicslist.forEach(e => {
            this.apply(e.name, e);
        });
    }

    apply(name: string, graphics: PIXI.Graphics) {}
}
