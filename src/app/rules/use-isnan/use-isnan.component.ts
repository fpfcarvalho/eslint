import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-use-isnan',
  templateUrl: './use-isnan.component.html',
  styleUrls: ['./use-isnan.component.scss'],
})
export class UseIsnanComponent implements OnInit {

  ngOnInit() {
    if (isNan(foo)) {
      // ...
    }

    if (!isNaN(foo)) {
      // ...
    }

    if (Number.isNaN(foo)) {
      bar();
    } else {
      switch (foo) {
        case 1:
          baz();
          break;
        // ...
      }
    }
  }

}
