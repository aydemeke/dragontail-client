import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (!input || !value) {
      return value;
    }

    return value.filter((val: any) => val.name.includes(input));
  }
}
