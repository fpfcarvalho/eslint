import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-unreachable',
  templateUrl: './no-unreachable.component.html',
  styleUrls: ['./no-unreachable.component.scss'],
})
export class NoUnreachableComponent implements OnInit {

  ngOnInit() {
    while(value) {
      console.log("done");
      break;
    }

    console.log("done");
    throw new Error("Oops!");
  }

  foo() {
    console.log("done");
    return true;
  }

}
