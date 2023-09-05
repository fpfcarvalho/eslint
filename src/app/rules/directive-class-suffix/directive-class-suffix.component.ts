import { Component, Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'sg-foo-bar',
})
class Test {}

@Component({
  selector: 'exo-directive-class-suffix',
  templateUrl: './directive-class-suffix.component.html',
  styleUrls: ['./directive-class-suffix.component.scss'],
})
export class DirectiveClassSuffixComponent implements OnInit {

  ngOnInit() {
  }

}
