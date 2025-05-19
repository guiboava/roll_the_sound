import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, maskitoElement, parseDateMask, priceMask } from 'src/app/core/constants/mask.constants';
import { ApplicationValidators } from 'src/app/core/constants/url.validator';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
  standalone: false,
})
export class ProductsFormComponent implements OnInit {

  priceMask = priceMask;
  maskitoElement = maskitoElement;

  productsForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    manufacturer: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    stock: new FormControl(true, [Validators.required]),
    image: new FormControl('', [Validators.required, ApplicationValidators.urlValidator]),
  });
  productId!: number;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {
    const productId = this.activatedRoute.snapshot.params['productId'];

    if (productId) {
      this.productsService.getById(productId).subscribe({
        next: (product) => {
          if (product) {
            this.productId = productId;
            this.productsForm.patchValue(product);
          }
        },
        error: (error) => {
          alert('Erro ao carregar o produto com id ' + productId)
          console.error(error);
        }
      });

    }
  }
  ngOnInit() {
  
  }

  hasError(field: string, error: string) {
    const formControl = this.productsForm.get(field);
    return formControl?.touched && formControl?.errors?.[error]
  }

  save() {
    let { value } = this.productsForm;
    this.productsService.save({
      ...value,
      id: this.productId
         }).subscribe({
      next: () => {
        this.toastController.create({
          message: 'Produto salvo com sucesso!',
          duration: 3000,
        }).then(toast => toast.present());
        this.router.navigate(['/products']);
      },
      error: (error) => {
        alert('Erro ao salvar o Produto ' + value.name + '!');
        console.error(error);
      }
    });
    
  }
}