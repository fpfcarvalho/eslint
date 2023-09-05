import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-dupe-keys',
  templateUrl: './no-dupe-keys.component.html',
  styleUrls: ['./no-dupe-keys.component.scss'],
})
export class NoDupeKeysComponent implements OnInit {

  ngOnInit() {
    const foo = {
      bar: "baz",
      bar: "qux",
    };

    const foo = {
      "bar": "baz",
      bar: "qux",
    };

    const foo = {
      0x1: "baz",
      1: "qux",
    };
  }

}
