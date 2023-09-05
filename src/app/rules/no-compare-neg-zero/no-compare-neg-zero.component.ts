import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-compare-neg-zero',
  templateUrl: './no-compare-neg-zero.component.html',
  styleUrls: ['./no-compare-neg-zero.component.scss']
})
export class NoCompareNegZeroComponent implements OnInit {

  ngOnInit() {
    if (x === -0) {
      // doSomething()...
    }
  }

}
