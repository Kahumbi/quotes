import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]= [
    {id:1,name:'The day it all ended',description:'The author is rodney'},
    {id:2,name:'When the sun sets',description:'The author is gandi'},
    {id:3,name:'Wisdom over money',description:'The author is sigmund'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
