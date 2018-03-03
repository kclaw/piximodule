import { PixiGraphics } from "../pixi-graphics/pixi-graphics";

export interface PixiGraphicsWrapper extends PixiGraphicsInvoker{
    getGraphicsList(): Array<PixiGraphics>;
}

export interface PixiGraphicsInvoker {
    apply(name: string, graphics: PIXI.Graphics);
}

export class PixiGraphicsInvokerImpl implements PixiGraphicsInvoker {
    
    apply(name: string, graphics: PIXI.Graphics) {
        console.log('called');
    }

}