import { IPixiViewControll } from '../pixi-common/pixi-viewcontroll';
import { ViewContainerRef } from '@angular/core';
export interface IPixiLayer extends IPixiViewControll {}
export abstract class PixiLayer implements IPixiLayer {
    abstract getViewContainerRef(): ViewContainerRef;
}