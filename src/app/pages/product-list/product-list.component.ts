import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IProduct, PRODUCTS } from './product.interface';
import { map, Observable, startWith, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  public products$!: Observable<IProduct[]>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.products$ = this.getProducts$();
  }

  public trackByName(index: number, product: { name: string }): string {
    return product.name;
  }

  private getProducts$(): Observable<IProduct[]> {
    return timer(3000).pipe(map(() => PRODUCTS));
  }
}
