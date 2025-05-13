import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
     { title: 'Home', url: '/home', icon: 'home-sharp' },
     { title: 'Produtos', url: '/products', icon: 'bag-sharp' },
     { title: 'Pedido', url: '/order', icon: 'cart-sharp' },
     { title: 'Artistas', url: '/artists', icon: "man-sharp" },
     { title: 'Na Nota', url: '/on-note', icon: 'musical-notes-sharp' },
     { title: 'Opinião', url: '/opinion', icon: 'happy-sharp' },
  ];
  constructor() {}
}
