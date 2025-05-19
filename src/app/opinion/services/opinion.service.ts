import { Injectable } from '@angular/core';
import { Opinion } from '../models/opinion.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  
private readonly API_URL = 'http://localhost:3000/opinions';
 constructor(private http: HttpClient) { }

  getById(opinionId: string) {
    return this.http.get<Opinion>(`${this.API_URL}/${opinionId}`);
  }

  getList() {
    return this.http.get<Opinion[]>(this.API_URL)
  }

  private add(opinion: Opinion) {
    return this.http.post<Opinion>(this.API_URL, opinion);
  }

  private update(opinion: Opinion) {
    return this.http.put<Opinion>(`${this.API_URL}/${opinion.id}`, opinion);
  }

  save(opinion: Opinion) {
    return opinion.id ? this.update(opinion) : this.add(opinion);
  }

  remove(opinion: Opinion) {
    return this.http.delete<Opinion>(this.API_URL + opinion.id)
  }
}