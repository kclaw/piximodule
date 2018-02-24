import {
    Component,
    OnInit,
    ViewContainerRef,
    ComponentFactoryResolver,
    Renderer2
} from '@angular/core';
import { PixiInitializerComponent } from '../../pixi-initializer/pixi-initializer.component';

@Component({
    selector: 'example1',
    templateUrl: './example1.component.html',
    styleUrls: ['./example1.component.css']
})
export class Example1Component extends PixiInitializerComponent implements OnInit {
    constructor(
        protected vcr: ViewContainerRef,
        protected cfr: ComponentFactoryResolver,
        protected r: Renderer2
    ) {
        super(vcr, cfr, r);
    }

    ngOnInit() {}
}
