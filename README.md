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
<code>
    <pixi-block>
        <child-element class="A"></child-element>
        <child-element class="B"></child-element>
    </pixi-block>
</code> 

According to styling of Child elements, for example,

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

the browser will allocate dimension of PIXI block with width matching parent and 1500 height.

In this mechanism, it is designed to initialise PIXI block element after child element initialisation although it is unknown of child element(s).
