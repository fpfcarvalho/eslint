import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-throw-literal',
  templateUrl: './no-throw-literal.component.html',
  styleUrls: ['./no-throw-literal.component.scss']
})
export class NoThrowLiteralComponent implements OnInit {

  ngOnInit() {
    throw "error";

    throw 0;

    throw undefined;

    throw null;

    const err = new Error();
    throw "an " + err;
    throw `${err}`;
  }

}
