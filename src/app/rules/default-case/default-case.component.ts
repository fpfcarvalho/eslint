import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-default-case',
  templateUrl: './default-case.component.html',
  styleUrls: ['./default-case.component.scss'],
})
export class DefaultCaseComponent implements OnInit {

  ngOnInit() {
    switch (a) {
      case 1:
        /* code */
        break;
      case 2:
        /* code */
        break;
      default:
        /* code */
        break;
    }
  }

}
