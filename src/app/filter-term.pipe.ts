import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(values: any[], searchTerm : String){    
    if(!values || !searchTerm){
      return values;
    }    
    return values.filter(item =>
      item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
}
