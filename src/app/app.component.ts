import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    textStyle(): PIXI.TextStyle {
        return new PIXI.TextStyle({
            stroke: '#FCFF00',
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 'white',
            align: 'center'
        });
    }
}
