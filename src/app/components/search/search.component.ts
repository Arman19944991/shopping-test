import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShoppingService } from './../../services/shopping.service';
import { ProductInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, OnDestroy {
  product: string;
  productsData: ProductInterface[] = [];
  public unsubscribe$ = new Subject();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.productList
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items: ProductInterface[]) => {
        this.productsData = items
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
