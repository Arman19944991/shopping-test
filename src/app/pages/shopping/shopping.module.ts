import { FormsModule } from '@angular/forms';
import { SearchPipe } from './../../pipes/search.pipe';
import { NgModule } from '@angular/core';
import { ShoppingService } from './../../services/shopping.service';
import { ShoppingComponent } from './shopping.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SearchComponent } from '../../components/search/search.component';
import { ShoppintItemComponent } from '../../components/shoppint-item/shoppint-item.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { SortPipe } from './../../pipes/sort.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ShoppintItemComponent,
    SliderComponent,
    ShoppingComponent,
    SortPipe,
    SearchPipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    NgxSpinnerModule,
    FormsModule
  ],

  providers: [
    ShoppingService
  ],
})
export class ShoppingModule { }
