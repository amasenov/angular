import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propName: string): any {
    if (value.length === 0 || filterStr === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterStr) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
