[![Build Status](https://travis-ci.org/kclaw/piximodule.svg?branch=master)](https://travis-ci.org/kclaw/piximodule)

# PixiModule
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.
- - -
# Vision

This project, integrates Angular with PIXI module(known as pixijs), provides 
reusable component for other project and is designed with high  adaptability on variable viewport and high compatability with current HTMLElement.

## Autofit

Originally, PIXI module requires dimensions to intialise a canvas.
By benefiting from Angular dynamic component, developer can have dynamic-dimensiional canvas without given dimensions.

user can imagine a block element which contains two layers. One layer named to angular-template-layer contains elements of Angular template  and another layer named to pixi-layer contains PIXI elements.

### Overlapped Template-Pixi Layers Layout

let we name a block with two layers aforementioned as PIXI block.
Each PIXI block will be allocated with dimension by user agent according to rules.

Child element(s) of PIXI block determines dimension of PIXI block.

```
<pixi-block>
    <angular-template-layer>
        <child-element class="A"></child-element>
        <child-element class="B"></child-element>
    </angular-template>
    <pixi-layer>
        ...
        <pixi-element></pixi-element>
        ...
    </pixi-layer>
</pixi-block>
```

According to styling of Child elements, for example,

```
child-element {
    display: block;
}

.A {
    width: 400px;
    height: 700px;
}

.B {
    width: 300px;
    height: 800px;
}
```

the browser will allocate dimension of PIXI block with width matching parent and 1500 height.

In this mechanism, it is designed to initialise PIXI block element after child element initialisation although it is unknown of child element(s).

## Responsive

Responsive element means that change in dimension of responsive target triggers reaction of the element.

On angular-template-layer, it is normal use case as usual.

On pixi-layer, PIXI draws on canvas it references to. The canvas is with fixed dimension. To deal with responsive requirement, PIXI should 
initialize a new canvas each time on responsive requirement.

Every responsive element has its responsive target and will
take action according to its responsive requirement.

for a responsive requirement, it could be a function executed by
response target effects on responsive element.



## User friendly

The project will develop a module fully supporting pixi v4 elements as well as use cases structuring in angular template

```
<pixi-initializer>
    ...
    <pixi-sprite></pixi-sprite>
    <pixi-container>
        <pixi-sprite><pixi-sprite>
        <pixi-sprite></pixi-sprite>
    </pixi-container>
    <pixi-container>
        <pixi-sprite><pixi-sprite>
    </pixi-container>
    ...
</pixi-initializer>
```

known pixi elements integration:
* [x] application (delegate to and started by pixi-initializer)
* [x] sprite
* [x] container
* [] loader
* [] animated-sprite
* [] tiling-sprite
* [] textstyle
* [] text
* [] graphics
* [] texture
* [] baserendertexture
* [] rendertexture
* [] mesh
* [] filter


## Angular Component, its selector and its file Naming Rule

Name of all Angular Component would be prefixed with Pixi and then appendiing corresponding module name and/or class name in PIXI module styling with Pascal case.

they should also be sufficed with Component

>for example,
>
>PIXI.Application => PixiApplicationComponent
>PIXI.Container => PixiContainerComponent
>PIXI.extras.AnimatedSprite => PixiExtrasAnimatedSpriteComponent

there is exception when some Angular Component created is not reflected on/mapped to PIXI module. This kind of Component is mainly for template structural purpose.
They only have different sources on middle part of the Component name, and prefix
and suffix are same for rules.

>for example,
>
>PixiGraphicWrapperComponent can not be mapped to >PIXI.GraphicWrapper



selector of Component should be named in term of <pixi-{middlename}></pixi-{middlename}>.{middlename} is replacable word and should be lower case.

>for example,
>
>PixiApplicationComponent -> <pixi-application><pixi-application>
>PixiGraphicWrapperComponent -> ><pixi-graphicwrapper></pixi-graphicwrapper>

filename of Component should be named releavent to selector.
{selector}.component.css
{selector}.component.html
{selector}.component.spec.ts
{selector}.component.ts
{selector} is replacable.
for example,

<pixi-application> should contains at least four files, they are
pixi-application.component.css
pixi-application.component.html
pixi-application.component.spec.ts
pixi-application.component.ts


In usual case, angular cli helps to generate those Component related files 
- - -
# Use Case

## example1

1. extends PixiInitializerComponent (example.component.ts)
2. replace 
   `constructor()` instead of `constructor(protected vcr: ViewContainerRef, protected cfr: ComponentFactoryResolver, protected r: Renderer2) { super(vcr, cfr, r); }` (example.component.ts)

3. paste 
    ```
    <example1>
        <pixi-container>
            <pixi-sprite 
                [width]='50' 
                [height]='50' 
                [x]='50' 
                [y]='50' 
                [fromImageUrl]="'../assets/minimize.svg'">
            </pixi-sprite>
            <pixi-text 
                [text]="'hello'" 
                [x]='200' 
                [style]=textStyle()>
            </pixi-text>
        </pixi-container> 
        <pixi-text 
            [text]="'hello'" 
            [x]='200'>
        </pixi-text>
    </example1>
    ``` 
    (app.component.html)

4. paste a function 
    ```
    textStyle(): PIXI.TextStyle {
        return new PIXI.TextStyle({stroke:'#FCFF00' ,fontFamily : 'Arial', fontSize: 24, fill : 'white', align : 'center'});
    }
    ```
   (app.component.ts)

## example2

1. paste
    ```
    <example2 pixi-initializer>
        <pixi-container>
            <pixi-sprite 
                [width]='50' 
                [height]='50' 
                [x]='50' 
                [y]='50' 
                [fromImageUrl]="'../assets/minimize.svg'">
            </pixi-sprite>
            <pixi-text 
                [text]="'oh no'">
            </pixi-text>
            <example-graphicswrapper>
                <pixi-graphics 
                    [name]="'hi'">
                </pixi-graphics>
            </example-graphicswrapper>
        </pixi-container> 
    </example2>
    ```
    (app.component.html)
- - -
# Quick Start
    for developer of this module, you are pleased to fork this repository on github. Have fun.

    for user of this module, please follow instructions below.

    1. create a new project
    > ng new my-new-project
    > cd my-new-project

    2. import PixiModule from 


# Change log
## 1.0.0-beta.1 (current)
- [x] introduce PixiApplicationComponent
- [x] introduce PixiInitializerComponent
- [x] introduce PixiGraphicsWrapperComponent
- [x] introduce PixiGraphicscomponent
- [x] introduce PixiLayerComponent
- [x] intorduce PixiSpriteComponent
- [x] introduce PixiTextComponent
- [x] support compodoc
- [x] support typedoc
- [x] support prettier
- [x] support ng-packagr

## 1.0.0-beta.2 
- [x] use Angular Directive instead of class inheritance
- [] introduce Responsive on pixi application

- - -
# Reference
name       |link
-----------|-----------
pixijs(version: 4.5.1) document|http://pixijs.download/dev/docs/index.html
pixijs official webpage|http://www.pixijs.com/

- - -
# License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.