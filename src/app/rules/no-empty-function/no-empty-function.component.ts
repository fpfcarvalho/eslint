import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-empty-function',
  templateUrl: './no-empty-function.component.html',
  styleUrls: ['./no-empty-function.component.scss'],
})
export class NoEmptyFunctionComponent implements OnInit {

  ngOnInit() {
    const foo = function() {
      // do nothing
    };

    const bar = () => {
      // do nothing
    };
  }

  aaa() {
    // do nothing
  }

}
