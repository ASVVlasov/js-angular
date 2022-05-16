import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from '../product-list/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  constructor() {}
}
