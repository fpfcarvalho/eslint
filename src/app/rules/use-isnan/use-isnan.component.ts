import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-isnan',
  templateUrl: './use-isnan.component.html',
  styleUrls: ['./use-isnan.component.scss'],
})
export class UseIsnanComponent implements OnInit {

  ngOnInit() {
    if (foo == NaN) {
      // ...
    }

    if (foo != NaN) {
      // ...
    }

    switch (foo) {
      case NaN:
        bar();
        break;
      case 1:
        baz();
        break;
      // ...
    }
  }

}
