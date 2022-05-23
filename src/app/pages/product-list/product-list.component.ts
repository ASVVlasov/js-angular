import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  public products$: Observable<IProduct[] | null> = this.productService.products$;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  public trackByName(index: number, product: { name: string }): string {
    return product.name;
  }
}
