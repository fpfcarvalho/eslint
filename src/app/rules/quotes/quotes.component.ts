import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {

  ngOnInit() {
    const double = "double";
    const unescaped = "a string containing 'single' quotes";
    const backtick = `back${x}tick`;
  }

}
