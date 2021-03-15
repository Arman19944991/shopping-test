import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private product = new BehaviorSubject({});
  productList = this.product.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setProductList(data: object) {
    this.product.next(data)
  }

  getProductList(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('assets/data/shopping-data.json')
  }

}
