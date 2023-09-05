import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-dupe-args',
  templateUrl: './no-dupe-args.component.html',
  styleUrls: ['./no-dupe-args.component.scss'],
})
export class NoDupeArgsComponent implements OnInit {

  ngOnInit() {
    const bar = function (a, b) {
      console.log("value of a:", a);
    };
  }

  foo(a, b) {
    console.log("value of a:", a);
  }

}
