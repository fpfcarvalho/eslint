import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrls: ['./indent.component.scss'],
})
export class IndentComponent implements OnInit {

  ngOnInit() {
    switch(a){
    case "a":
        break;
    case "b":
        break;
    }

    if (a) {
        b=c;
        function foo(d) {
            e=f;
        }
    }
  }

}
