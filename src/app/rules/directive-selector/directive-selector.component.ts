import { Component, Directive } from '@angular/core';

@Directive({
  selector: '[exoSgFooBar]',
})
class TestDirective {}

@Component({
  selector: 'exo-directive-selector',
  templateUrl: './directive-selector.component.html',
  styleUrls: ['./directive-selector.component.scss'],
})
export class DirectiveSelectorComponent {

}
