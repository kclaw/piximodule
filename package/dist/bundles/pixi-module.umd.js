(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('pixi.js'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'pixi.js', '@angular/common'], factory) :
	(factory((global['pixi-module'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,core,pixi_js,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var PixiApplicationComponent = /** @class */ (function () {
    function PixiApplicationComponent(vcr) {
        this.vcr = vcr;
    }
    PixiApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.application = new PIXI.Application(this.width, this.height, this.options);
        this.vcr.element.nativeElement.appendChild(this.application.view);
        this.vcr.element.nativeElement.style = 'position:absolute;';
        this.containers.forEach(function (container) {
            _this.application.stage.addChild(container);
        });
        this.sprites.forEach(function (sprite) {
            _this.application.stage.addChild(sprite);
        });
        this.texts.forEach(function (text) {
            _this.application.stage.addChild(text);
        });
        this.graphicswrappers.forEach(function (wrapper) {
            wrapper.graphicslist.forEach(function (graphics) {
                _this.application.stage.addChild(graphics);
            });
        });
    };
    return PixiApplicationComponent;
}());
PixiApplicationComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-application',
                template: "",
                styles: ["\n"]
            },] },
];
PixiApplicationComponent.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
var PixiSpriteComponent = /** @class */ (function (_super) {
    __extends(PixiSpriteComponent, _super);
    function PixiSpriteComponent() {
        return _super.call(this) || this;
    }
    PixiSpriteComponent.prototype.ngOnInit = function () {
        if (null != this.fromImageUrl)
            this.texture = PIXI.Texture.fromImage(this.fromImageUrl);
    };
    return PixiSpriteComponent;
}(PIXI.Sprite));
PixiSpriteComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-sprite',
                template: "<p>\n  pixi-sprite works!\n</p>\n",
                styles: ["\n"],
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
                    'interactive',
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
PixiSpriteComponent.ctorParameters = function () { return []; };
PixiSpriteComponent.propDecorators = {
    "fromImageUrl": [{ type: core.Input },],
};
var PixiLayerComponent = /** @class */ (function () {
    function PixiLayerComponent(vcr) {
        this.vcr = vcr;
    }
    return PixiLayerComponent;
}());
PixiLayerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-layer',
                template: "",
                styles: [":host{\n    position:absolute;\n}\n"]
            },] },
];
PixiLayerComponent.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
PixiLayerComponent.propDecorators = {
    "zindex": [{ type: core.HostBinding, args: ['style.z-index',] },],
};
var PixiGraphicsComponent = /** @class */ (function (_super) {
    __extends(PixiGraphicsComponent, _super);
    function PixiGraphicsComponent() {
        return _super.call(this) || this;
    }
    return PixiGraphicsComponent;
}(PIXI.Graphics));
PixiGraphicsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-graphics',
                template: "<p>\n  pixi-graphics works!\n</p>\n",
                styles: ["\n"],
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
                    'interactive',
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
PixiGraphicsComponent.ctorParameters = function () { return []; };
var PixiGraphicsWrapperComponent = /** @class */ (function () {
    function PixiGraphicsWrapperComponent() {
    }
    PixiGraphicsWrapperComponent.prototype.ngOnInit = function () { };
    PixiGraphicsWrapperComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.graphicslist.forEach(function (graphics) {
            _this.apply(graphics.name, graphics);
        });
    };
    PixiGraphicsWrapperComponent.prototype.apply = function (name, graphics) { };
    return PixiGraphicsWrapperComponent;
}());
PixiGraphicsWrapperComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-graphicswrapper',
                template: "<p>\n  graphics-wrapper works!\n</p>\n",
                styles: ["\n"]
            },] },
];
PixiGraphicsWrapperComponent.ctorParameters = function () { return []; };
PixiGraphicsWrapperComponent.propDecorators = {
    "graphicslist": [{ type: core.ContentChildren, args: [PixiGraphicsComponent,] },],
};
var PixiTextComponent = /** @class */ (function (_super) {
    __extends(PixiTextComponent, _super);
    function PixiTextComponent() {
        return _super.call(this) || this;
    }
    return PixiTextComponent;
}(PIXI.Text));
PixiTextComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-text',
                template: "<p>\n  pixi-text works!\n</p>\n",
                styles: ["\n"],
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
                    'interactive',
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
PixiTextComponent.ctorParameters = function () { return []; };
var PixiContainerComponent = /** @class */ (function (_super) {
    __extends(PixiContainerComponent, _super);
    function PixiContainerComponent() {
        return _super.call(this) || this;
    }
    PixiContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sprites.forEach(function (sprite) {
            _this.addChild(sprite);
        });
        this.graphicswrappers.forEach(function (wrapper) {
            wrapper.graphicslist.forEach(function (graphics) {
                _this.addChild(graphics);
            });
        });
        this.texts.forEach(function (text) {
            _this.addChild(text);
        });
    };
    return PixiContainerComponent;
}(PIXI.Container));
PixiContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-container',
                template: "<p>\n  pixi-container works!\n</p>\n",
                styles: ["\n"],
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
                    'interactive',
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
PixiContainerComponent.ctorParameters = function () { return []; };
PixiContainerComponent.propDecorators = {
    "sprites": [{ type: core.ContentChildren, args: [PixiSpriteComponent,] },],
    "graphicswrappers": [{ type: core.ContentChildren, args: [PixiGraphicsWrapperComponent,] },],
    "texts": [{ type: core.ContentChildren, args: [PixiTextComponent,] },],
};
var PixiInitializerDirective = /** @class */ (function () {
    function PixiInitializerDirective(vcr, componentFactoryResolver, renderer) {
        this.vcr = vcr;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
    PixiInitializerDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initializeApplication(), 0;
        });
    };
    PixiInitializerDirective.prototype.initializeApplication = function () {
        var factory = this.componentFactoryResolver.resolveComponentFactory(PixiApplicationComponent);
        var componentRef = this.vcr.createComponent(factory);
        ((componentRef.instance)).height = this.measureHeight();
        ((componentRef.instance)).width = this.measureWidth();
        ((componentRef.instance)).sprites = this.sprites;
        ((componentRef.instance)).containers = this.containers;
        ((componentRef.instance)).graphicswrappers = this.graphicswrappers;
        ((componentRef.instance)).texts = this.texts;
        this.vcr.element.nativeElement.style =
            'display:block;width:' +
                this.measureWidth() +
                'px;height:' +
                this.measureHeight() +
                'px';
        var layer1 = this.createPixiLayer(2);
        var children = this.vcr.element.nativeElement.children;
        var looping = true;
        while (looping) {
            var counter = 0;
            for (var i = 0; i < children.length; i++) {
                if (children[i].tagName == 'PIXI-LAYER') {
                    counter++;
                    continue;
                }
                this.renderer.appendChild(layer1.vcr.element.nativeElement, children[i]);
            }
            if (counter == children.length)
                looping = false;
        }
        var layer2 = this.createPixiLayer(1);
        this.renderer.appendChild(layer2.vcr.element.nativeElement, componentRef.injector.get(PixiApplicationComponent).vcr.element.nativeElement);
    };
    PixiInitializerDirective.prototype.createPixiLayer = function (zindex) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(PixiLayerComponent);
        var componentRef = this.vcr.createComponent(factory);
        ((componentRef.instance)).zindex = zindex;
        this.renderer.appendChild(this.vcr.element.nativeElement, componentRef.injector.get(PixiLayerComponent).vcr.element.nativeElement);
        return componentRef.injector.get(PixiLayerComponent);
    };
    PixiInitializerDirective.prototype.measureWidth = function () {
        return this.vcr.element.nativeElement.getBoundingClientRect().width;
    };
    PixiInitializerDirective.prototype.measureHeight = function () {
        return this.vcr.element.nativeElement.getBoundingClientRect().height;
    };
    return PixiInitializerDirective;
}());
PixiInitializerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[pixi-initializer]'
            },] },
];
PixiInitializerDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.ComponentFactoryResolver, },
    { type: core.Renderer2, },
]; };
PixiInitializerDirective.propDecorators = {
    "sprites": [{ type: core.ContentChildren, args: [PixiSpriteComponent,] },],
    "containers": [{ type: core.ContentChildren, args: [PixiContainerComponent,] },],
    "graphicswrappers": [{ type: core.ContentChildren, args: [PixiGraphicsWrapperComponent,] },],
    "texts": [{ type: core.ContentChildren, args: [PixiTextComponent,] },],
};
var PixiInitializerComponent = /** @class */ (function (_super) {
    __extends(PixiInitializerComponent, _super);
    function PixiInitializerComponent(vcr, componentFactoryResolver, renderer) {
        var _this = _super.call(this, vcr, componentFactoryResolver, renderer) || this;
        _this.vcr = vcr;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.renderer = renderer;
        return _this;
    }
    return PixiInitializerComponent;
}(PixiInitializerDirective));
PixiInitializerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'pixi-initializer',
                template: "This sentence should not display in browser window. from PIXIInitailizerComponent",
                styles: ["\n"]
            },] },
];
PixiInitializerComponent.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.ComponentFactoryResolver, },
    { type: core.Renderer2, },
]; };
var PixiGraphicswrapperDirective = /** @class */ (function () {
    function PixiGraphicswrapperDirective() {
        this.graphicswrapper = function () { };
    }
    PixiGraphicswrapperDirective.prototype.ngOnInit = function () { };
    return PixiGraphicswrapperDirective;
}());
PixiGraphicswrapperDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[pixi-graphicswrapper]'
            },] },
];
PixiGraphicswrapperDirective.ctorParameters = function () { return []; };
PixiGraphicswrapperDirective.propDecorators = {
    "graphicswrapper": [{ type: core.Input, args: ['pixi-graphicswrapper',] },],
};
var PixiModule = /** @class */ (function () {
    function PixiModule() {
    }
    return PixiModule;
}());
PixiModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
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
PixiModule.ctorParameters = function () { return []; };

exports.PixiModule = PixiModule;
exports.ɵa = PixiApplicationComponent;
exports.ɵe = PixiContainerComponent;
exports.ɵg = PixiGraphicsComponent;
exports.ɵf = PixiGraphicsWrapperComponent;
exports.ɵj = PixiGraphicswrapperDirective;
exports.ɵc = PixiInitializerComponent;
exports.ɵd = PixiInitializerDirective;
exports.ɵi = PixiLayerComponent;
exports.ɵb = PixiSpriteComponent;
exports.ɵh = PixiTextComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pixi-module.umd.js.map
