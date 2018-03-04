import { IPixiLayout } from '../pixi-common/pixi-layout';
export interface IPixiContainer extends IPixiLayout {}
export abstract class PixiContainer extends PIXI.Container implements IPixiContainer {
    abstract layout();
}