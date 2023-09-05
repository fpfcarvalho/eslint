import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-unreachable-loop',
  templateUrl: './no-unreachable-loop.component.html',
  styleUrls: ['./no-unreachable-loop.component.scss'],
})
export class NoUnreachableLoopComponent implements OnInit {

  ngOnInit() {
    while (foo) {
      doSomething(foo);
      foo = foo.parent;
      break;
    }

    for (var i = 0; i < arr.length; i++) {
      if (isSomething(arr[i])) {
        return arr[i];
      } else {
        throw new Error("Doesn't exist.");
      }
    }
  }

}
