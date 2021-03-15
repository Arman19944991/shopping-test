import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-shoppint-item',
  templateUrl: './shoppint-item.component.html',
  styleUrls: ['./shoppint-item.component.css']
})

export class ShoppintItemComponent implements OnInit {
  @Input() productData: ProductInterface;
  
  constructor() { }

  ngOnInit(): void {}

}
