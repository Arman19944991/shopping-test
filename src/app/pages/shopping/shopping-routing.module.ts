import { ShoppingComponent } from './shopping.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ShoppingComponent,
    children: [
      { path: '', redirectTo: 'shopping-list'},
      { path: 'shopping-list', component: ShoppingListComponent},
      { path: 'shopping-product-detail/:productId', component: ProductDetailComponent},
    ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
