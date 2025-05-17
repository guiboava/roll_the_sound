import { Component, OnInit } from '@angular/core';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';

@Component({
  selector: 'app-opinion-form',
  templateUrl: './opinion-form.component.html',
  styleUrls: ['./opinion-form.component.scss'],
  standalone: false,
})
export class OpinionFormComponent implements OnInit {


  dateMask = dateMask;
  priceMask = priceMask;
  maskitoElement = maskitoElement;

  city = [
    'Criciuma',
    'Içara',
    'Chapecó',
    'Joinville',
    'Caçador',
    'Tubarão'
  ];

  note = [
    1,
    2,
    3, 
    4,
    5
  ];

  getStars(n: number): string {
    return '⭐'.repeat(n);
  }

  constructor() { }

  ngOnInit() { }

}
