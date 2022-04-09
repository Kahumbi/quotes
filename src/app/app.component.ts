import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :Quote[]= [
    {id:1, name:'The day it all ended'},
    {id:1, name:'When the sun sets'},
    {id:1, name:'Wisdom over money'},
  ];
  title: any;
}



