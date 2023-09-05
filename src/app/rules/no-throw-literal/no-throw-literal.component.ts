import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-throw-literal',
  templateUrl: './no-throw-literal.component.html',
  styleUrls: ['./no-throw-literal.component.scss'],
})
export class NoThrowLiteralComponent implements OnInit {

  ngOnInit() {
    throw new Error("error");

    throw new Error();

    const err = new Error();
    throw err;
  }

}
