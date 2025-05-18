import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, maskitoElement, priceMask } from 'src/app/core/constants/mask.constants';
import { OpinionService } from '../services/opinion.service';

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

  opinionForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    note: new FormControl('', [Validators.required]),
    comment: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3000)]),
    recommend: new FormControl('',[Validators.required]),
    city: new FormControl('', [Validators.required])
  });

  getStars(n: number): string {
    return '⭐'.repeat(n);
  }

   constructor(
    private opinionService: OpinionService
  ) { }

  ngOnInit() {
  }

  hasError(field: string, error: string) {
    const formControl = this.opinionForm.get(field);
    return formControl?.touched && formControl?.errors?.[error]
  }

  save() {
    let { value } = this.opinionForm;
    console.log(value);
    this.opinionService.add(value);
  }
}
