import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-curly',
  templateUrl: './curly.component.html',
  styleUrls: ['./curly.component.scss'],
})
export class CurlyComponent implements OnInit {

  ngOnInit() {

    if (foo) {foo++;}

    while (bar)
    {baz();}

    if (foo) {
      baz();
    } else {qux();}
  }

}
