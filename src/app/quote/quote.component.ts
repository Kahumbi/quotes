import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]= [
    new Quote(1,'The day it all ended','The author is Maradona ',new Date(2022,4,11) ),
    new Quote(2,'When the sun sets','The author is Gandi',new Date(2022,4,12)),
    new Quote(3,'Wisdom over money','The author is Sigmund',new Date(2022,4,13)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  addNewQuote(quote){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
