#
[![Build Status](https://travis-ci.org/kclaw/piximodule.svg?branch=master)](https://travis-ci.org/kclaw/piximodule)

# PixiModule
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

# Project Goal

This project, integrates Angular with PIXI module, provides 
reusable component for other project and is designed with high  adaptability on variable viewport and high compatability with current HTMLElement.


Originally, PIXI module requires dimensions to intialise a canvas.
By benefiting from Angular dynamic component, developer can have dynamic-dimensiional canvas without given dimensions.

developer can imagine a HTML block element which contains two layers. One layer supports original HTMLElemnt and another layer layouts PIXI Element.

let we name a HTML block with two layers aforementioned PIXI block.
Each PIXI block will be allocated with dimension by browser according to rules.

Child element(s) of PIXI block determines dimension of PIXI block.
```
<pixi-block>
    <child-element class="A"></child-element>
    <child-element class="B"></child-element>
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


# License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.