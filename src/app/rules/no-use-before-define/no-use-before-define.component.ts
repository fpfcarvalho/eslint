import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-use-before-define',
  templateUrl: './no-use-before-define.component.html',
  styleUrls: ['./no-use-before-define.component.scss'],
})
export class NoUseBeforeDefineComponent implements OnInit {

  ngOnInit() {
    const b = 1;

    /**
     *
     */
    function function1() {
      return b;
    }

    /**
     *
     */
    function function2() {}
    function2();
  }

}
