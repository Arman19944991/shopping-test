import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/models/product.interface';
import { ShoppingService } from '../../../services/shopping.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productData: ProductInterface[];
  productId: string;
  productQty: number = 1;
  public unsubscribe$ = new Subject();


  constructor(
    private shoppingService: ShoppingService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(param => {
      this.productId = param.get('productId');
      this.productQty = 1
      this.setProductList()
    })
  }

  ngOnInit(): void {

  }

  setProductList() {
    this.spinner.show();
    this.shoppingService.getProductList().subscribe((items: ProductInterface[]) => {
      this.shoppingService.setProductList(items)
      this.productData = this.search(this.productId, items);
      this.spinner.hide();
    })
  }

  search(nameKey, myArray): ProductInterface[] {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i]['id'] == nameKey) {
        return myArray[i];
      }
    }
  }

  counter(type): void {
    if (this.productQty == 1 && type === 'minus') return
    if (this.productQty == this.productData['qty'] && type === 'plus') return
    if (type === 'minus') {
      this.productQty--
    } else {
      this.productQty++
    }
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
