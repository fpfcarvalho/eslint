import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-notation',
  templateUrl: './dot-notation.component.html',
  styleUrls: ['./dot-notation.component.scss']
})
export class DotNotationComponent implements OnInit {

  ngOnInit() {
    const x = foo["bar"];
  }

}
