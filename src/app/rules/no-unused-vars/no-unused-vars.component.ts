import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-unused-vars',
  templateUrl: './no-unused-vars.component.html',
  styleUrls: ['./no-unused-vars.component.scss'],
})
export class NoUnusedVarsComponent implements OnInit {

  foo = 2;

  ngOnInit() {
    const x = 5;

    let y = 10;
    y = 5 + x;

    this.foo = y;
  }

}
