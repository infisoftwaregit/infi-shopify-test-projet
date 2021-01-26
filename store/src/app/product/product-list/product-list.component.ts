import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Observable} from 'rxjs';
import {IProduct} from '../../core/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<IProduct[]> = new Observable<IProduct[]>();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productService.getAll();
  }

}
