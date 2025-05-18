import { Component, OnInit } from '@angular/core';
import { Product } from './models/products.type';
import { ProductsService } from './services/products.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {
  productList: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private alertController: AlertController,
  ) {
  }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }
  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }
  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }
  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
    this.productList = this.productsService.getList();
  }

ngOnInit() { }

  remove(product: Product) {
    this.alertController.create({
      header: 'Exclusão',
      message: `Confirma a exclusão do produto ${product.name}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.productsService.remove(product);
            this.productList = this.productsService.getList();
          }
        },
        'Não'
      ]
    }).then(alert => alert.present());
  }

}
