import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, maskitoElement, parseDateMask, priceMask } from 'src/app/core/constants/mask.constants';
import { ApplicationValidators } from 'src/app/core/constants/url.validator';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
  standalone: false,
})
export class ProductsFormComponent  implements OnInit {

  priceMask = priceMask;
  maskitoElement = maskitoElement;

   productsForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    manufacturer: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    stock: new FormControl(true,[Validators.required]),
    image: new FormControl('',[Validators.required,ApplicationValidators.urlValidator]),
  });

  constructor(
    private productsService: ProductsService
  ) {}


  ngOnInit() {
  }

  hasError(field: string, error: string) {
    const formControl = this.productsForm.get(field);
    return formControl?.touched && formControl?.errors?.[error]
  }

  save() {
    let { value } = this.productsForm;
    console.log(value);
    this.productsService.add(value);
  }
}