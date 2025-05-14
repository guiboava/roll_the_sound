import { Component, OnInit } from '@angular/core';
import { Product } from './models/products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {
    productList: Product[] = [
    {
      name: "Guitarra GRG132DX",
      price: 2.6500,
      manufacturer: "Ibanez",
      stock: true,
      image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
    },
    {
      name: "Gaita C(DÓ)",
      price: 165,
      manufacturer: "Hering",
      stock: true,
      image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
