import { IPixiLayout } from '../pixi-common/pixi-layout';
import { IPixiViewControll } from '../pixi-common/pixi-viewcontroll';
import { ViewContainerRef } from '@angular/core';
export interface IPixiApplication extends IPixiLayout, IPixiViewControll {}
export abstract class PixiApplication extends PIXI.Application implements IPixiApplication {
    abstract layout();
    abstract getViewContainerRef(): ViewContainerRef;
}