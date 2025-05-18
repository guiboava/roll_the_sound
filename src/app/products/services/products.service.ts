import { Injectable } from '@angular/core';
import { Product } from '../models/products.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

      private productList: Product[] = [
      {
        id: 1,
        name: "Guitarra GRG132DX",
        price: 2650,
        manufacturer: "Ibanez",
        stock: true,
        image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
      },
      {
        id: 2,
        name: "Gaita C(DÓ)",
        price: 165,
        manufacturer: "Hering",
        stock: true,
        image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
      },  
    ]

constructor() { }

  getById(productId: number) {
    return this.productList.find(p => p.id === productId);
  }

  getList() {
    return [...this.productList];
  }

  add(product: Product) {
    this.productList = [...this.productList, product];  
  }
 remove(product: Product) {
    this.productList = this.productList.filter(g => g.id !== product.id);
  }
}
