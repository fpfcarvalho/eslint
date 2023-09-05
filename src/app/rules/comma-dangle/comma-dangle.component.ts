import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comma-dangle',
  templateUrl: './comma-dangle.component.html',
  styleUrls: ['./comma-dangle.component.scss']
})
export class CommaDangleComponent implements OnInit {

  ngOnInit() {
    const foo = {
      bar: "baz",
      qux: "quux"
    };

    const foo = { bar: "baz", qux: "quux", };
    const arr = [ 1,2, ];
    const arr = [ 1,
      2, ];

    const arr = [
      1,
      2
    ];

    foo({
      bar: "baz",
      qux: "quux"
    });
  }

}
