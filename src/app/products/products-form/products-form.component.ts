import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';

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
    price: new FormControl(''),
    manufacturer: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    stock: new FormControl(true),
    image: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {}

}
