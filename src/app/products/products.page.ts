import { Component, OnInit } from '@angular/core';
import { Product } from './models/products.type';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {
    productList: Product[] = [];
  
  constructor(
    private productsService: ProductsService
  ) {
    this.productList = productsService.productList;
   }

  ngOnInit() {
  }

}
