import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-dupe-else-if',
  templateUrl: './no-dupe-else-if.component.html',
  styleUrls: ['./no-dupe-else-if.component.scss'],
})
export class NoDupeElseIfComponent implements OnInit {

  ngOnInit() {
    if (isSomething(x)) {
      foo();
    } else if (isSomething(x)) {
      bar();
    }

    if (a) {
      foo();
    } else if (b && c) {
      baz();
    } else if (b && c) {
      quux();
    } else {
      quuux();
    }
  }

}
