import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exo-getter-return',
  templateUrl: './getter-return.component.html',
  styleUrls: ['./getter-return.component.scss'],
})
export class GetterReturnComponent implements OnInit {

  ngOnInit() {
    p = {
      get name(){
        return '';
      },
    };

    Object.defineProperty(p, 'age', {
      get: function (){
        return '';
      },
    });

    class P {
      get name() {
        return '';
      }
    }
  }

}
