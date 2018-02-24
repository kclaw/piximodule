import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PixiModule } from './pixi-module/pixi-module.module';
import { Example1Component } from './examples/example1/example1.component';
import { Example2Component } from './examples/example2/example2.component';
import { ExampleGraphicswrapperComponent } from './examples/example-graphicswrapper/example-graphicswrapper.component';
import { Example3Component } from './examples/example3/example3.component';
import { Example4Component } from './examples/example4/example4.component';
import { Example5Component } from './examples/example5/example5.component';
import { Example6Component } from './examples/example6/example6.component';

@NgModule({
    declarations: [
        AppComponent,
        Example1Component,
        Example2Component,
        ExampleGraphicswrapperComponent,
        Example3Component,
        Example4Component,
        Example5Component,
        Example6Component
    ],
    imports: [BrowserModule, PixiModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
