import { Component, ViewContainerRef, Input, HostBinding, ContentChildren, Directive, ComponentFactoryResolver, Renderer2, NgModule } from '@angular/core';
import 'pixi.js';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiApplicationComponent {
    /**
     * @param {?} vcr
     */
    constructor(vcr) {
        this.vcr = vcr;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.application = new PIXI.Application(this.width, this.height, this.options);
        this.vcr.element.nativeElement.appendChild(this.application.view);
        this.vcr.element.nativeElement.style = 'position:absolute;';
        this.containers.forEach(container => {
            this.application.stage.addChild(container);
        });
        this.sprites.forEach(sprite => {
            this.application.stage.addChild(sprite);
        });
        this.texts.forEach(text => {
            this.application.stage.addChild(text);
        });
        this.graphicswrappers.forEach(wrapper => {
            wrapper.graphicslist.forEach(graphics => {
                this.application.stage.addChild(graphics);
            });
        });
    }
}
PixiApplicationComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-application',
                template: ``,
                styles: [`
`]
            },] },
];
/** @nocollapse */
PixiApplicationComponent.ctorParameters = () => [
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiSpriteComponent extends PIXI.Sprite {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (null != this.fromImageUrl)
            this.texture = PIXI.Texture.fromImage(this.fromImageUrl);
    }
}
PixiSpriteComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-sprite',
                template: `<p>
  pixi-sprite works!
</p>
`,
                styles: [`
`],
                inputs: [
                    'x',
                    'y',
                    'alpha',
                    'anchor',
                    'blendMode',
                    'buttonMode',
                    'cacheAsBitmap',
                    'children',
                    'cursor',
                    'filterArea',
                    'filters',
                    'height',
                    'hitArea',
                    ' interactive',
                    'interactiveChildren',
                    'mask',
                    'name',
                    'pivot',
                    'position',
                    'renderable',
                    'rotation',
                    'scale',
                    'skew',
                    'transform',
                    'visible',
                    'width'
                ]
            },] },
];
/** @nocollapse */
PixiSpriteComponent.ctorParameters = () => [];
PixiSpriteComponent.propDecorators = {
    "fromImageUrl": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiLayerComponent {
    /**
     * @param {?} vcr
     */
    constructor(vcr) {
        this.vcr = vcr;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //this.vcr.element.nativeElement.style = 'width: 100%; height: 100%';
    }
}
PixiLayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-layer',
                template: ``,
                styles: [`:host{
    position:absolute;
}
`]
            },] },
];
/** @nocollapse */
PixiLayerComponent.ctorParameters = () => [
    { type: ViewContainerRef, },
];
PixiLayerComponent.propDecorators = {
    "zindex": [{ type: HostBinding, args: ['style.z-index',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiGraphicsComponent extends PIXI.Graphics {
    constructor() {
        super();
    }
}
PixiGraphicsComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-graphics',
                template: `<p>
  pixi-graphics works!
</p>
`,
                styles: [`
`],
                inputs: [
                    'tint',
                    'nativeLines',
                    'lineWidth',
                    'lineColor',
                    'isMask',
                    'fillAlpha',
                    'boundsPadding',
                    'blendMode',
                    'x',
                    'y',
                    'alpha',
                    'buttonMode',
                    'cacheAsBitmap',
                    'children',
                    'cursor',
                    'filterArea',
                    'filters',
                    'height',
                    'hitArea',
                    ' interactive',
                    'interactiveChildren',
                    'mask',
                    'name',
                    'pivot',
                    'position',
                    'renderable',
                    'rotation',
                    'scale',
                    'skew',
                    'transform',
                    'visible',
                    'width'
                ]
            },] },
];
/** @nocollapse */
PixiGraphicsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiGraphicsWrapperComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.graphicslist.forEach(e => {
            this.apply(e.name, e);
        });
    }
    /**
     * @param {?} name
     * @param {?} graphics
     * @return {?}
     */
    apply(name, graphics) { }
}
PixiGraphicsWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-graphicswrapper',
                template: `<p>
  graphics-wrapper works!
</p>
`,
                styles: [`
`]
            },] },
];
/** @nocollapse */
PixiGraphicsWrapperComponent.ctorParameters = () => [];
PixiGraphicsWrapperComponent.propDecorators = {
    "graphicslist": [{ type: ContentChildren, args: [PixiGraphicsComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiTextComponent extends PIXI.Text {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //let obj:Object = JSON.parse(this.stylestring);
        // this.style = new PIXI.TextStyle(obj);
    }
}
PixiTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-text',
                template: `<p>
  pixi-text works!
</p>
`,
                styles: [`
`],
                inputs: [
                    'style',
                    'canvas',
                    'text',
                    'x',
                    'y',
                    'alpha',
                    'anchor',
                    'blendMode',
                    'buttonMode',
                    'cacheAsBitmap',
                    'children',
                    'cursor',
                    'filterArea',
                    'filters',
                    'height',
                    'hitArea',
                    ' interactive',
                    'interactiveChildren',
                    'mask',
                    'name',
                    'pivot',
                    'position',
                    'renderable',
                    'rotation',
                    'scale',
                    'skew',
                    'transform',
                    'visible',
                    'width'
                ]
            },] },
];
/** @nocollapse */
PixiTextComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiContainerComponent extends PIXI.Container {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.sprites.forEach(sprite => {
            this.addChild(sprite);
        });
        this.graphicswrappers.forEach(wrapper => {
            wrapper.graphicslist.forEach(graphics => {
                this.addChild(graphics);
            });
        });
        this.texts.forEach(text => {
            this.addChild(text);
        });
    }
}
PixiContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-container',
                template: `<p>
  pixi-container works!
</p>
`,
                styles: [`
`],
                inputs: [
                    'x',
                    'y',
                    'alpha',
                    'buttonMode',
                    'cacheAsBitmap',
                    'children',
                    'cursor',
                    'filterArea',
                    'filters',
                    'height',
                    'hitArea',
                    ' interactive',
                    'interactiveChildren',
                    'mask',
                    'name',
                    'pivot',
                    'position',
                    'renderable',
                    'rotation',
                    'scale',
                    'skew',
                    'transform',
                    'visible',
                    'width'
                ]
            },] },
];
/** @nocollapse */
PixiContainerComponent.ctorParameters = () => [];
PixiContainerComponent.propDecorators = {
    "sprites": [{ type: ContentChildren, args: [PixiSpriteComponent,] },],
    "graphicswrappers": [{ type: ContentChildren, args: [PixiGraphicsWrapperComponent,] },],
    "texts": [{ type: ContentChildren, args: [PixiTextComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiInitializerDirective {
    /**
     * @param {?} vcr
     * @param {?} componentFactoryResolver
     * @param {?} renderer
     */
    constructor(vcr, componentFactoryResolver, renderer) {
        this.vcr = vcr;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setTimeout(() => {
            this.initializeApplication(), 0;
        });
    }
    /**
     * Dynamic initialize PixiInitializerComponent
     * @return {?}
     */
    initializeApplication() {
        let /** @type {?} */ factory = this.componentFactoryResolver.resolveComponentFactory(PixiApplicationComponent);
        let /** @type {?} */ componentRef = this.vcr.createComponent(factory);
        (/** @type {?} */ (componentRef.instance)).height = this.measureHeight();
        (/** @type {?} */ (componentRef.instance)).width = this.measureWidth();
        (/** @type {?} */ (componentRef.instance)).sprites = this.sprites;
        (/** @type {?} */ (componentRef.instance)).containers = this.containers;
        (/** @type {?} */ (componentRef.instance)).graphicswrappers = this.graphicswrappers;
        (/** @type {?} */ (componentRef.instance)).texts = this.texts;
        this.vcr.element.nativeElement.style =
            'display:block;width:' +
                this.measureWidth() +
                'px;height:' +
                this.measureHeight() +
                'px';
        let /** @type {?} */ layer1 = this.createPixiLayer(2);
        let /** @type {?} */ children = this.vcr.element.nativeElement.children;
        let /** @type {?} */ looping = true;
        while (looping) {
            let /** @type {?} */ counter = 0;
            for (var /** @type {?} */ i = 0; i < children.length; i++) {
                if (children[i].tagName == 'PIXI-LAYER') {
                    counter++;
                    continue;
                }
                this.renderer.appendChild(layer1.vcr.element.nativeElement, children[i]);
            }
            if (counter == children.length)
                looping = false;
        }
        let /** @type {?} */ layer2 = this.createPixiLayer(1);
        this.renderer.appendChild(layer2.vcr.element.nativeElement, componentRef.injector.get(PixiApplicationComponent).vcr.element.nativeElement);
    }
    /**
     * Create a PixiLayerComponent
     * @param {?} zindex number; zindex parameter specified the stack order of a pixilayercomponent
     * @return {?}
     */
    createPixiLayer(zindex) {
        let /** @type {?} */ factory = this.componentFactoryResolver.resolveComponentFactory(PixiLayerComponent);
        let /** @type {?} */ componentRef = this.vcr.createComponent(factory);
        (/** @type {?} */ (componentRef.instance)).zindex = zindex;
        this.renderer.appendChild(this.vcr.element.nativeElement, componentRef.injector.get(PixiLayerComponent).vcr.element.nativeElement);
        return componentRef.injector.get(PixiLayerComponent);
    }
    /**
     * @return {?} positive number; width of this component
     */
    measureWidth() {
        return this.vcr.element.nativeElement.getBoundingClientRect().width;
    }
    /**
     * @return {?} positive number; height of this component
     */
    measureHeight() {
        return this.vcr.element.nativeElement.getBoundingClientRect().height;
    }
}
PixiInitializerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[pixi-initializer]'
            },] },
];
/** @nocollapse */
PixiInitializerDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: Renderer2, },
];
PixiInitializerDirective.propDecorators = {
    "sprites": [{ type: ContentChildren, args: [PixiSpriteComponent,] },],
    "containers": [{ type: ContentChildren, args: [PixiContainerComponent,] },],
    "graphicswrappers": [{ type: ContentChildren, args: [PixiGraphicsWrapperComponent,] },],
    "texts": [{ type: ContentChildren, args: [PixiTextComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiInitializerComponent extends PixiInitializerDirective {
    /**
     * @param {?} vcr
     * @param {?} componentFactoryResolver
     * @param {?} renderer
     */
    constructor(vcr, componentFactoryResolver, renderer) {
        super(vcr, componentFactoryResolver, renderer);
        this.vcr = vcr;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
}
PixiInitializerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pixi-initializer',
                template: `<div>
    for testing purpose
</div>`,
                styles: [`
`]
            },] },
];
/** @nocollapse */
PixiInitializerComponent.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiGraphicswrapperDirective {
    constructor() {
        this.graphicswrapper = () => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PixiGraphicswrapperDirective.decorators = [
    { type: Directive, args: [{
                selector: '[pixi-graphicswrapper]'
            },] },
];
/** @nocollapse */
PixiGraphicswrapperDirective.ctorParameters = () => [];
PixiGraphicswrapperDirective.propDecorators = {
    "graphicswrapper": [{ type: Input, args: ['pixi-graphicswrapper',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PixiModule {
}
PixiModule.decorators = [
    { type: NgModule, args: [{
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
                    PixiGraphicswrapperDirective
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
                    PixiGraphicswrapperDirective
                ]
            },] },
];
/** @nocollapse */
PixiModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { PixiModule, PixiApplicationComponent as ɵa, PixiContainerComponent as ɵe, PixiGraphicsComponent as ɵg, PixiGraphicsWrapperComponent as ɵf, PixiGraphicswrapperDirective as ɵj, PixiInitializerComponent as ɵc, PixiInitializerDirective as ɵd, PixiLayerComponent as ɵi, PixiSpriteComponent as ɵb, PixiTextComponent as ɵh };
//# sourceMappingURL=pixi-module.js.map
