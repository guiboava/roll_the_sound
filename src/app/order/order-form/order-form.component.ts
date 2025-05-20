import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';
import { Product } from 'src/app/products/models/products.type';
import { ProductsService } from 'src/app/products/services/products.service';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  standalone:false,
})
export class OrderFormComponent  implements OnInit {

  dateMask = dateMask;
  priceMask = priceMask;
  maskitoElement = maskitoElement;

  productList: Product[] = [];

  orderForm: FormGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      clientName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
      clientCpf: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
      orderDate: new FormControl(''),
      status: new FormControl('', [Validators.required]),
      itemsList: new FormControl('', [Validators.required]),
    });
  
  constructor(
    private productsService: ProductsService,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {
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

  ngOnInit() {}

}
