import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-require-jsdoc',
  templateUrl: './require-jsdoc.component.html',
  styleUrls: ['./require-jsdoc.component.scss'],
})
export class RequireJsdocComponent implements OnInit {

  obj = {
    bar: function() {
      return 10;
    },
    baz() {
      return 10;
    },
  };

  ngOnInit() {
    const aaa = () => {
      return 10;
    };
  }

  foo() {
    return 10;
  }

}
