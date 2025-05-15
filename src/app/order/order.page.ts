import { Component, OnInit } from '@angular/core';
import { Order } from './models/order.type';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: false,
})
export class OrderPage implements OnInit {

  orderList: Order[] = [
    {
      clientName: "Guilherme da Silva boava",
      clientCpf: "114.53873902",
      orderDate: new Date(2025, 5, 14),
      totalPrice: 5630,
      itemsList: [
        {
          image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
          name: "Guitarra GRG132DX",
          price: 2650,
          quantity: 2,
        },
        {
          image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
          name: "Gaita C(DÓ)",
          price: 165,
          quantity: 2,
        },
        
      ],
    },
    
    {
      clientName: "Pedro dos Santos",
      clientCpf: "114.53873902",
      orderDate: new Date(2025, 5, 14),
      totalPrice: 5630,
      itemsList: [
        {
          image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
          name: "Guitarra GRG132DX",
          price: 2650,
          quantity: 2,
        },
        {
          image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
          name: "Gaita C(DÓ)",
          price: 165,
          quantity: 2,
        },
        
      ],
    },
    
    {
      clientName: "Ronaldo Antunes",
      clientCpf: "114.53873902",
      orderDate: new Date(2025, 5, 14),
      totalPrice: 5630,
      itemsList: [
        {
          image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
          name: "Guitarra GRG132DX",
          price: 2650,
          quantity: 2,
        },
        {
          image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
          name: "Gaita C(DÓ)",
          price: 165,
          quantity: 2,
        },
        
      ],
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
