import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-multiple-empty-lines',
  templateUrl: './no-multiple-empty-lines.component.html',
  styleUrls: ['./no-multiple-empty-lines.component.scss'],
})
export class NoMultipleEmptyLinesComponent implements OnInit {

  ngOnInit() {

    const foo = 1;

    const bar = 2;
  }

}
