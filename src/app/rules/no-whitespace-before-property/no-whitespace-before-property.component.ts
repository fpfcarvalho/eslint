import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-no-whitespace-before-property',
  templateUrl: './no-whitespace-before-property.component.html',
  styleUrls: ['./no-whitespace-before-property.component.scss'],
})
export class NoWhitespaceBeforePropertyComponent implements OnInit {

  ngOnInit() {
    foo [bar];
    foo. bar;
    foo .bar;
    foo. bar. baz;

    foo. bar()
      .baz();

    foo
      .bar(). baz();
  }

}
