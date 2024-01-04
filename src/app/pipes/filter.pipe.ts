import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any[] {

    if (value instanceof Array && args[0] && value[0] instanceof Object) {
      let key: string = args[0];
      return value.filter(a => a[key]);
    }
    return value;
  }

}
