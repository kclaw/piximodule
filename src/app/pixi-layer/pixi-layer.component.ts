import { Component, Input, OnInit, ViewContainerRef, HostBinding } from '@angular/core';

@Component({
    selector: 'pixi-layer',
    templateUrl: './pixi-layer.component.html',
    styleUrls: ['./pixi-layer.component.css']
})
export class PixiLayerComponent implements OnInit {
    @HostBinding('style.z-index') zindex: number;

    constructor(public vcr: ViewContainerRef) {}

    ngOnInit() {
        //this.vcr.element.nativeElement.style = 'width: 100%; height: 100%';
    }
}
