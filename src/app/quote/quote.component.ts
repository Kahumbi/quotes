import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]= [
    new Quote(1,'"The supreme art of war is to subdue thy enemy without fighting"','The author is Sun Tzu ',new Date(2022,4,11) ),
    new Quote(2,'"This violent delights have violent ends"','The author is William Shakespeare',new Date(2022,4,12)),
    new Quote(3,'"One must be sane to think clearly but one can think deeply and be quite insane"','The author is Nikola Tesla',new Date(2022,4,13)),
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
    let quotesize = this.quotes.length;
    quote.id = quotesize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
