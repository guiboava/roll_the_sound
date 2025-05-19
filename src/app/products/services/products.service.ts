import { Injectable } from '@angular/core';
import { Product } from '../models/products.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getById(productId: string) {
    return this.http.get<Product>(`${this.API_URL}/${productId}`);
  }

  getList() {
    return this.http.get<Product[]>(this.API_URL)
  }

  private add(product: Product) {
    return this.http.post<Product>(this.API_URL, product);
  }

  private update(product: Product) {
    return this.http.put<Product>(`${this.API_URL}/${product.id}`, product);
  }

  save(product: Product) {
    return product.id ? this.update(product) : this.add(product);
  }

  remove(product: Product) {
    return this.http.delete(`${this.API_URL}/${product.id}`);
  }
}
