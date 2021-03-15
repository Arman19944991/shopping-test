import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { ShoppingService } from '../../../services/shopping.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductInterface } from 'src/app/models/product.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy, AfterViewInit {
  productsData: ProductInterface[];
  productsDefoultData: ProductInterface[];
  sortKey: string = null;
  sortType: boolean = null;
  public unsubscribe$ = new Subject();
  start: number = 0;
  limit: number = 8;
  end: number = this.limit + this.start;
  selectedRowIndex: number = null;

  constructor(
    private shoppingService: ShoppingService,
    private spinner: NgxSpinnerService,
    private elem: ElementRef) { }

  ngOnInit(): void {
    this.spinner.show();
    this.shoppingService.getProductList()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items: ProductInterface[]) => {
        this.shoppingService.setProductList(items)
        this.productsDefoultData = items;
        this.productsData = this.getProductData(this.start, this.end);
        this.updateIndex();
        this.spinner.hide();
      })
  }

  onBlockScroll(e) {
    const tableViewHeight = e.target.offsetHeight
    const tableScrollHeight = e.target.scrollHeight
    const scrollLocation = e.target.scrollTop;

    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;

    if (scrollLocation > limit) {
      let data = this.getProductData(this.start, this.end);;
      this.productsData = this.productsData.concat(data);
      this.updateIndex();
    }
  }

  getProductData(start, end) {
    return this.productsDefoultData.filter((value, index) => index >= start && index < end)
  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  sortData(type: string): void {
    if (this.sortKey == type) this.sortType = !this.sortType
    else this.sortType = false
    this.sortKey = type;
  }

  ngAfterViewInit() {
    console.log(this.elem.nativeElement.querySelector('#shopping-list'), 'sssss')
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
