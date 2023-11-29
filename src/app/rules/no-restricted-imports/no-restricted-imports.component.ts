import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-restricted-imports',
  templateUrl: './no-restricted-imports.component.html',
  styleUrls: ['./no-restricted-imports.component.scss'],
})
export class NoRestrictedImportsComponent implements OnInit {

  foo: string | undefined;

  ngOnInit() {
    this.foo = '';
  }

}
