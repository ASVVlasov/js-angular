import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { ProductApiService } from './product-api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products$ = new BehaviorSubject<IProduct[] | null>(null);

  get products$(): Observable<IProduct[] | null> {
    return this._products$.asObservable();
  }
  constructor(private productApiService: ProductApiService) {}

  public loadProducts(): void {
    this.productApiService.getProducts$().subscribe((products: IProduct[]) => {
      this._products$.next(products);
    });
  }
}
