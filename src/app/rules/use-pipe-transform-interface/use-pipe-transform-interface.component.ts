import { Pipe } from '@angular/core';

@Pipe({ name: 'test' })
export class UsePipeTransformInterfaceComponent {

  transform(value: string) {}
}
