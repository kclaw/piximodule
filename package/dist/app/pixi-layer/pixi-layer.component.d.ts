import { OnInit, ViewContainerRef } from '@angular/core';
export declare class PixiLayerComponent implements OnInit {
    vcr: ViewContainerRef;
    zindex: number;
    constructor(vcr: ViewContainerRef);
    ngOnInit(): void;
}
