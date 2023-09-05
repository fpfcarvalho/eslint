import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-template-curly-in-string',
  templateUrl: './no-template-curly-in-string.component.html',
  styleUrls: ['./no-template-curly-in-string.component.scss'],
})
export class NoTemplateCurlyInStringComponent implements OnInit {

  ngOnInit() {
    "My name is ${name}!";
    'My name is ${name}!';
    "This is a calculation result: ${3 * 10 * 42}";
  }

}
