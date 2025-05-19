import { Component, OnInit } from '@angular/core';
import { Product } from './models/products.type';
import { ProductsService } from './services/products.service';
import { AlertController, ToastController } from '@ionic/angular';

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
    private toastController: ToastController,
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
    this.productsService.getList().subscribe({
      next: (response) => {
        this.productList = response;
      },
      error: (error) => {
        alert('Erro ao carregar lista de produtos');
        console.error(error);
      }
    });
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
            this.productsService.remove(product).subscribe({
              next: (response) => {
                this.productList = this.productList.filter(p => p.id !== product.id);
                this.toastController.create({
                  message: `Produto ${product.name} excluído com sucesso!`,
                  duration: 3000,
                  color: 'primary',
                  keyboardClose: true,
                }).then(toast => toast.present());
              },
              error: (error) => {
                alert('Erro ao excluir o jogo ' + product.name);
                console.error(error);
              }
            });
          }
        },
        'Não'
      ]
    }).then(alert => alert.present());
  }

}
