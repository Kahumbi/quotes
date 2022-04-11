import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  @Input () upward: string;
  numberOfLikes: number = 0;
  upvoteButtonClick(){
    this.numberOfLikes+=1;
  }
  downvoteButtonClick(){
    this.numberOfLikes-=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
