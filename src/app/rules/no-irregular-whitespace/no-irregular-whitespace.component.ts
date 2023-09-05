import { Component } from '@angular/core';

@Component({
  selector: 'app-no-irregular-whitespace',
  templateUrl: './no-irregular-whitespace.component.html',
  styleUrls: ['./no-irregular-whitespace.component.scss'],
})
export class NoIrregularWhitespaceComponent {

  thing /*<NBSP>*/(){
    return 'test';
  }

  thing2() {
    return 'test'; /*<ENSP>*/
  }

  thing3() {
    return 'test';
  }

}
