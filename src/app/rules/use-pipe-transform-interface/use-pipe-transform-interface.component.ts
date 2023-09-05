import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'test' })
export class UsePipeTransformInterfaceComponent implements PipeTransform {

  transform(value: string) {}
}
