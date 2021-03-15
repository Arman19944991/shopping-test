import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort'})

export class SortPipe implements PipeTransform {
    constructor() { }

    transform(value: any[], key: string | null, type: boolean | null): any {
        if (key === null) return value
        else return value.sort(function (a, b) {
            if(type == false){
                if (a[key] > b[key]) {
                    return 1;
                }
                if (a[key] < b[key]) {
                    return -1;
                }
                return 0;
            }else{
                if (a[key] < b[key]) {
                    return 1;
                }
                if (a[key] > b[key]) {
                    return -1;
                }
                return 0;
            }
        })
    }
}