import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-unreachable',
  templateUrl: './no-unreachable.component.html',
  styleUrls: ['./no-unreachable.component.scss'],
})
export class NoUnreachableComponent implements OnInit {

  ngOnInit() {
    while(value) {
      break;
      console.log("done");
    }

    throw new Error("Oops!");
    console.log("done");
  }

  foo() {
    return true;
    console.log("done");
  }

}
