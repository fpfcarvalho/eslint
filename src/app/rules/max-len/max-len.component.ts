import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-max-len',
  templateUrl: './max-len.component.html',
  styleUrls: ['./max-len.component.scss'],
})
export class MaxLenComponent implements OnInit {

  ngOnInit() {
    const foo = {
      "bar": "This is a bar.",
      "baz": { "qux": "This is a qux" },
      "difficult": "to read",
    };

    const textString = 'Exads - Save time and money with a customized and ' +
      'self-serve ad platform built for your advertising business. ' +
      'Reach your goals with our infrastructure!';
  }

}
