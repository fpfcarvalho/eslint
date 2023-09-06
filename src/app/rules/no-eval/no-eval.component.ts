import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-eval',
  templateUrl: './no-eval.component.html',
  styleUrls: ['./no-eval.component.scss'],
})
export class NoEvalComponent implements OnInit {

  ngOnInit() {
    const obj = { x: 'foo' },
      key = 'x',
      value = obj[key];
  }

}
