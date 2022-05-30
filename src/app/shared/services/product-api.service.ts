import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}

  getProducts$(): Observable<IProduct[]> {
    return this.httpClient.get<{ items: IProduct[] }>('/products/suggestion').pipe(pluck('items'));
  }
}
