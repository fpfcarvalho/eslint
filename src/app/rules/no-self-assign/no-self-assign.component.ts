import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-self-assign',
  templateUrl: './no-self-assign.component.html',
  styleUrls: ['./no-self-assign.component.scss'],
})
export class NoSelfAssignComponent implements OnInit {

  ngOnInit() {
    foo = foo;

    [ a, b ] = [ a, b ];

    [ a, ...b ] = [ x, ...b ];
  }

}
