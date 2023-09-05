import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-explicit-function-return-type',
  templateUrl: './explicit-function-return-type.component.html',
  styleUrls: ['./explicit-function-return-type.component.scss'],
})
export class ExplicitFunctionReturnTypeComponent implements OnInit {

  ngOnInit() {
    function test() {
      return;
    }

    const fn = function () {
      return 1;
    };

    const arrowFn = () => 'test';
  }

  method() {
    return;
  }

}
