import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-unsafe-optional-chaining',
  templateUrl: './no-unsafe-optional-chaining.component.html',
  styleUrls: ['./no-unsafe-optional-chaining.component.scss'],
})
export class NoUnsafeOptionalChainingComponent implements OnInit {

  ngOnInit() {
    (obj?.foo)();

    (obj?.foo).bar;

    (foo || obj?.foo)();

    for (bar of obj?.foo){;}
  }

}
