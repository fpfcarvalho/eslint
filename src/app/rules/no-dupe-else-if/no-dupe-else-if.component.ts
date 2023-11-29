import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-dupe-else-if',
  templateUrl: './no-dupe-else-if.component.html',
  styleUrls: ['./no-dupe-else-if.component.scss'],
})
export class NoDupeElseIfComponent implements OnInit {

  ngOnInit() {
    if (isSomething(x)) {
      foo();
    } else if (isSomethingElse(x)) {
      bar();
    }

    if (a) {
      foo();
    } else if (b && c) {
      baz();
    } else {
      quuux();
    }
  }

}
