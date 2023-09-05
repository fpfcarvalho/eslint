import { Component, Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'sg-foo-bar'
})
class Test {}

@Component({
  selector: 'app-directive-selector',
  templateUrl: './directive-selector.component.html',
  styleUrls: ['./directive-selector.component.scss']
})
export class DirectiveSelectorComponent implements OnInit {

  ngOnInit() {
  }

}
