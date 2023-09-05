import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-dupe-args',
  templateUrl: './no-dupe-args.component.html',
  styleUrls: ['./no-dupe-args.component.scss']
})
export class NoDupeArgsComponent implements OnInit {

  ngOnInit() {
    const bar = function (a, b, a) {
      console.log("value of the second a:", a);
    };
  }

  foo(a, b, a) {
    console.log("value of the second a:", a);
  }

}
