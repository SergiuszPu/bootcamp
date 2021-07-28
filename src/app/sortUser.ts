import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortUserPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    // console.log(array);
    const tmp = array.slice()
    tmp.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        // console.log('afiel', b);

        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}