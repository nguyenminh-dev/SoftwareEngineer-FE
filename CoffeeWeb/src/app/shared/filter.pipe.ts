import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], tbName: string, fieldName: string): any[] {

    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!tbName ) { return items; }
    
    
    // convert the tbName to lower case
    tbName = tbName.toLowerCase();

    // retrun the filtered array
    return items.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(tbName);
      }
      return false;
    });
   }
}
