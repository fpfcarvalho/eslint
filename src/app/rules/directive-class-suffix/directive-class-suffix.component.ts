import { Component, Directive } from '@angular/core';

@Directive({
  selector: '[exoSgFooBar]',
})
class TestDirective {}

@Component({
  selector: 'exo-directive-class-suffix',
  templateUrl: './directive-class-suffix.component.html',
  styleUrls: ['./directive-class-suffix.component.scss'],
})
export class DirectiveClassSuffixComponent {

}
