import { Component, OnInit } from '@angular/core';
import { Opinion } from './models/opinion.type';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.page.html',
  styleUrls: ['./opinion.page.scss'],
  standalone: false,
})
export class OpinionPage implements OnInit {

    opinionList: Opinion[] = [
    {
    name: 'Guilherme da Silva Boava',
    note: 5,
    comment: 'Comprei uma guitarra na loja de Criciuma, Uma otima guitarra compraria novamente.',
    recommend: true,
    city: 'Criciuma',
   },
    {
    name: 'Guilherme da Silva Boava',
    note: 3,
    comment: 'Comprei uma guitarra na loja de Criciuma, Uma otima guitarra compraria novamente.',
    recommend: false,
    city: 'Criciuma',
   },
  ]



  getArray(n: number): number[] {
    return Array.from({ length: n });
  }

  constructor() { }

  ngOnInit() {
  }

}
