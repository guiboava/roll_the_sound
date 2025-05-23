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
      id: 1,
      clientName: "Guilherme da Silva boava",
      clientCpf: "114.53873902",
      orderDate: new Date(2025, 5, 14),
      status: 'CANCELADO',
      itemsList: [
        {
          id: 1,
          image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
          name: "Guitarra GRG132DX",
          price: 2650,
          quantity: 1,
        },
        {
          id: 2,
          image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
          name: "Gaita C(DÓ)",
          price: 165,
          quantity: 2,
        },
        
      ],

    },
    
    {
      id: 2,
      clientName: "Pedro dos Santos",
      clientCpf: "114.53873902",
      orderDate: new Date(2025, 5, 14),
      status: 'PENDENTE',
      itemsList: [
        {
          id: 1,
          image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
          name: "Guitarra GRG132DX",
          price: 2650,
          quantity: 2,
        },
        {
          id: 2,
          image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
          name: "Gaita C(DÓ)",
          price: 165,
          quantity: 9,
        },
        
      ],

    },
    
    {
      id: 3,
      clientName: "Ronaldo Antunes",
      clientCpf: "114.53873902",
      orderDate: new Date(2025, 5, 14),
      status: 'PAGO',
      itemsList: [
        {
          id: 1,
          image: "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
          name: "Guitarra GRG132DX",
          price: 2650,
          quantity: 2,
        },
        {
          id: 2,
          image: "https://acdn-us.mitiendanube.com/stores/283/003/products/free-blues-1-nv1-024ec3140c64efb6d616672368061234-1024-1024.jpg",
          name: "Gaita C(DÓ)",
          price: 165,
          quantity: 5,
        },
        
        ],
    },

  ]
getOrderTotal(order: Order): number {
return order.itemsList.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

  constructor() { }

  ngOnInit() {
  }

}
