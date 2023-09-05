import { Component } from '@angular/core';

@Component({
  selector: 'app-no-dupe-class-members',
  templateUrl: './no-dupe-class-members.component.html',
  styleUrls: ['./no-dupe-class-members.component.scss']
})
export class NoDupeClassMembersComponent {

  foo;
  foo;

  get bar() { }

  bar() { }
  bar() { }
}
