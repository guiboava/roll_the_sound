import { Injectable } from '@angular/core';
import { Opinion } from '../models/opinion.type';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

    private opinionList: Opinion[] = [
    {
    id:1,
    name: 'Guilherme da Silva Boava',
    note: 5,
    comment: 'Comprei uma guitarra na loja de Criciuma, Uma otima guitarra compraria novamente.',
    recommend: true,
    city: 'Criciuma',
   },
    {
    id:2,
    name: 'Guilherme da Silva Boava',
    note: 3,
    comment: 'Comprei uma guitarra na loja de Criciuma, Uma otima guitarra compraria novamente.',
    recommend: false,
    city: 'Criciuma',
   },
  ];

  constructor() { }
  
  getById(opinionId: number) {
    return this.opinionList.find(o => o.id === opinionId);
  }
  
  getList() {
    return [...this.opinionList];
  }


  private add(opinion: Opinion) {
    this.opinionList = [...this.opinionList, {
      ...opinion,
      id: this.getNextId()
    }];
  }

  private getNextId(): number {
    const maxId = this.opinionList.reduce((id, opinion) => {
      if (!!opinion.id && opinion?.id > id) {
        id = opinion.id;
      }
      return id;
    }, 0);
    return maxId + 1;
  }

  private update(updatedOpnion: Opinion) {
    this.opinionList = this.opinionList.map(o => {
      return (o.id === updatedOpnion.id) ? updatedOpnion : o;
    });
  }

  save(opinion: Opinion) {
    opinion.id ? this.update(opinion) : this.add(opinion);
  }


 remove(opinion: Opinion) {
    this.opinionList = this.opinionList.filter(g => g.id !== opinion.id);
  }
}
