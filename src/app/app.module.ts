import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PixiApplicationComponent } from './pixi-application/pixi-application.component';
import { PixiSpriteComponent } from './pixi-sprite/pixi-sprite.component';


@NgModule({
  declarations: [
    AppComponent,
    PixiApplicationComponent,
    PixiSpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
