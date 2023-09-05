import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-self-assign',
  templateUrl: './no-self-assign.component.html',
  styleUrls: ['./no-self-assign.component.scss']
})
export class NoSelfAssignComponent implements OnInit {

  ngOnInit() {
    foo = foo;

    [ a, b ] = [ a, b ];

    [ a, ...b ] = [ x, ...b ];
  }

}
