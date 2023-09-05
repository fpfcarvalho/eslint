import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-use-before-define',
  templateUrl: './no-use-before-define.component.html',
  styleUrls: ['./no-use-before-define.component.scss'],
})
export class NoUseBeforeDefineComponent implements OnInit {

  ngOnInit() {
    function function1() {
      return b;
    }
    const b = 1;


    function2();
    function function2() {}
  }

}
