import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :string[];

    constructor(){
      this.quotes= ["The day it ended","When the sun sets, Wisdom over money"]
    }

}

