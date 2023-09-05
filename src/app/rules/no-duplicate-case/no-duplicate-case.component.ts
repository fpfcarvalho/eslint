import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-duplicate-case',
  templateUrl: './no-duplicate-case.component.html',
  styleUrls: ['./no-duplicate-case.component.scss'],
})
export class NoDuplicateCaseComponent implements OnInit {

  ngOnInit() {
    switch (a) {
      case 1:
        break;
      case 2:
        break;
      case 1: // duplicate test expression
        break;
      default:
        break;
    }
  }

}
