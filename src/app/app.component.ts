import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
     { title: 'Home', url: '/home', icon: 'home' },
     { title: 'Produtos', url: '/products', icon: 'bag' },
     { title: 'Pedido', url: '/order', icon: 'cart' },
     { title: 'Artistas', url: '/artists', icon: "man" },
     { title: 'Na Nota', url: '/on-note', icon: 'musical-notes' },
     { title: 'Opinião', url: '/opinion', icon: 'happy' },
  ];
  constructor() {}
}
