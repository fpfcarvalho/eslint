import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-eqeqeq',
  templateUrl: './eqeqeq.component.html',
  styleUrls: ['./eqeqeq.component.scss'],
})
export class EqeqeqComponent implements OnInit {

  ngOnInit() {
    if (x === 42) {
      // do nothing
    }

    if ('' === text) {
      // do nothing
    }

    if (obj.getStuff() !== undefined) {
      // do nothing
    }
  }

}
