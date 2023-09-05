import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-sparse-arrays',
  templateUrl: './no-sparse-arrays.component.html',
  styleUrls: ['./no-sparse-arrays.component.scss'],
})
export class NoSparseArraysComponent implements OnInit {

  ngOnInit() {
    const items = [];
    const colors = [ "red", "blue", ];
  }

}
