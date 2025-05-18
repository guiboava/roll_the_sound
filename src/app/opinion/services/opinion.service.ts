import { Injectable } from '@angular/core';
import { Opinion } from '../models/opinion.type';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

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

  constructor() { }
}
