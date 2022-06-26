import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Blog {
    id?:number;
    name?:string;
    avatar?:string;
    price?:string;
    introduce?:string;
    category_id?:number
}
