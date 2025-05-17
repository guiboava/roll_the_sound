import { Component, OnInit } from '@angular/core';
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

  platforms = [
    'Playstation',
    'Xbox',
    'Nintendo Switch',
    'Android',
    'iOS',
    'PC'
  ]

  constructor() { }

  ngOnInit() {}

}
