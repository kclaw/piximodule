import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixiApplicationComponent } from '../pixi-application/pixi-application.component';
import { PixiSpriteComponent } from '../pixi-sprite/pixi-sprite.component';
import { PixiInitializerComponent } from '../pixi-initializer/pixi-initializer.component';
import { PixiLayerComponent } from '../pixi-layer/pixi-layer.component';
import { PixiContainerComponent } from '../pixi-container/pixi-container.component';
import { PixiTextComponent } from '../pixi-text/pixi-text.component';
import { PixiGraphicsComponent } from '../pixi-graphics/pixi-graphics.component';
import { PixiGraphicsWrapperComponent } from '../pixi-graphicswrapper/pixi-graphicswrapper.component';
import { PixiInitializerDirective } from '../pixi-initializer/pixi-initializer.directive';
import { PixiGraphicsWrapperDirective } from '../pixi-graphicswrapper/pixi-graphicswrapper.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        PixiApplicationComponent,
        PixiSpriteComponent,
        PixiInitializerComponent,
        PixiLayerComponent,
        PixiContainerComponent,
        PixiTextComponent,
        PixiGraphicsComponent,
        PixiGraphicsWrapperComponent,
        PixiInitializerDirective,
        PixiGraphicsWrapperDirective
    ],
    entryComponents: [PixiApplicationComponent, PixiLayerComponent],
    exports: [
        PixiApplicationComponent,
        PixiSpriteComponent,
        PixiInitializerComponent,
        PixiLayerComponent,
        PixiContainerComponent,
        PixiTextComponent,
        PixiGraphicsComponent,
        PixiGraphicsWrapperComponent,
        PixiInitializerDirective,
        PixiGraphicsWrapperDirective
    ]
})
export class PixiModule {}
