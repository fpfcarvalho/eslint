import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-default-case-last',
  templateUrl: './default-case-last.component.html',
  styleUrls: ['./default-case-last.component.scss'],
})
export class DefaultCaseLastComponent implements OnInit {

  ngOnInit() {
    switch (foo) {
      case 1:
        bar();
        break;
      default:
        baz();
        break;
      case 2:
        quux();
        break;
    }

    switch (foo) {
      case "x":
        bar();
        break;
      default:
      case "y":
        baz();
        break;
    }
  }

}
