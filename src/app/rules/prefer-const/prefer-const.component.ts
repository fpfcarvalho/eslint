import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-prefer-const',
  templateUrl: './prefer-const.component.html',
  styleUrls: ['./prefer-const.component.scss'],
})
export class PreferConstComponent implements OnInit {

  ngOnInit() {

    const field = 3;
    console.log(field);

    for (const i in [ 1, 2, 3 ]) {
      console.log(i);
    }
  }

}
