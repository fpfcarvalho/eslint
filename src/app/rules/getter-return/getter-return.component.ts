import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getter-return',
  templateUrl: './getter-return.component.html',
  styleUrls: ['./getter-return.component.scss']
})
export class GetterReturnComponent implements OnInit {

  ngOnInit() {
    p = {
      get name(){

      }
    };

    Object.defineProperty(p, "age", {
      get: function (){

      }
    });

    class P {
      get name() {

      }
    }
  }

}
