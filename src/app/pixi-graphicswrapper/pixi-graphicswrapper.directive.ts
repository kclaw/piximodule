import { Directive, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[pixi-graphicswrapper]'
})
export class PixiGraphicswrapperDirective implements OnInit {
    @Input('pixi-graphicswrapper') graphicswrapper = () => {};

    constructor() {}

    ngOnInit() {}
}
