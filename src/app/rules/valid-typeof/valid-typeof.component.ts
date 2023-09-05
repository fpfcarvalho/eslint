import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-valid-typeof',
  templateUrl: './valid-typeof.component.html',
  styleUrls: ['./valid-typeof.component.scss'],
})
export class ValidTypeofComponent implements OnInit {

  ngOnInit() {
    typeof foo === 'string';
    typeof foo === 'undefined';
    typeof bar !== 'number';
    typeof bar !== 'function';
  }
}
