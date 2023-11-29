import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-lonely-if',
  templateUrl: './no-lonely-if.component.html',
  styleUrls: ['./no-lonely-if.component.scss'],
})
export class NoLonelyIfComponent implements OnInit {

  ngOnInit() {
    if (condition) {
      // ...
    } else if (anotherCondition) {
      // ...
    }

    if (condition) {
      // ...
    } else if (anotherCondition) {
      // ...
    } else {
      // ...
    }
  }

}
