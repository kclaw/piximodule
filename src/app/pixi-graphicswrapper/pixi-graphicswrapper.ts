import { IPixiGraphics } from "../pixi-graphics/pixi-graphics";

export interface IPixiGraphicsWrapper extends IPixiGraphicsInvoker{
    getGraphicsList(): Array<IPixiGraphics>;
}

export interface IPixiGraphicsInvoker {
    apply(name: string, graphics: PIXI.Graphics);
}

export class PixiGraphicsInvoker implements IPixiGraphicsInvoker {
    apply(name: string, graphics: PIXI.Graphics){};
}

export abstract class PixiGraphicsWrapper implements IPixiGraphicsWrapper {
    abstract getGraphicsList(): IPixiGraphics[];
    abstract apply(name: string, graphics: PIXI.Graphics);
}