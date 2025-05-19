import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { ProductsFormComponent } from './products-form/products-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
     },
  {
    path: 'new',
    component: ProductsFormComponent
  },
  {
    path: 'edit/:productId',
    component: ProductsFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
