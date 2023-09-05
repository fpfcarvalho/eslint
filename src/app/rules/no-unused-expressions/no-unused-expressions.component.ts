import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-unused-expressions',
  templateUrl: './no-unused-expressions.component.html',
  styleUrls: ['./no-unused-expressions.component.scss'],
})
export class NoUnusedExpressionsComponent implements OnInit {

  ngOnInit() {
    let i = 0;
    function increment() { i += 1; }
    increment();
  }

}
