import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-require-jsdoc',
  templateUrl: './require-jsdoc.component.html',
  styleUrls: ['./require-jsdoc.component.scss'],
})
export class RequireJsdocComponent implements OnInit {

  obj = {
    /**
     * bar function
     */
    bar: function() {
      return 10;
    },
    /**
     * baz function
     */
    baz() {
      return 10;
    },
  };

  /**
   * ngOnInit method
   */
  ngOnInit() {
    const aaa = () => {
      return 10;
    };
  }

  /**
   * foo method
   */
  foo() {
    return 10;
  }

}
