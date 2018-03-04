import { IPixiLayer } from '../pixi-layer/pixi-layer';
import { PixiApplication } from '../pixi-application/pixi-application';

export interface IPixiInitializer {
    /** 
     * Execute procedure of PixiBlock initialization
    */
    initialize();
    /**
     * Dynamic initialize PixiInitializer
     */
    initializePixiApplication();
    /**
     * Initialize Pixi Layers
     */
    initializePixiLayers();
    /** 
     * Styling PixiInitializer
    */
    stylingInitializer();
    /**
     * Create a PixiLayer
     * @param zindex number; zindex parameter specified the stack order of a pixilayercomponent
     * { @link https://www.w3schools.com/cssref/pr_pos_z-index.asp CSS zindex } 
     */
    createPixiLayer(zindex: number): IPixiLayer;
    /**
     * @return positive number; width of this component
     */
    measureWidth(): number;
    /**
     * @return positive number; height of this component
     */
    measureHeight(): number;
}