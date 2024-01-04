import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {

    if (value instanceof Array && args[0] && value[0] instanceof Object) {
      let key: string = args[0];
      value.sort((a, b) => a[key] - b[key])
    }
    return value;
  }

}
