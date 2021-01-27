import { IProduct } from '../../core/models';
import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../core/services';
import {Item} from '../../core/models';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: IProduct = {
    _id: '1',
    name: 'Canish',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    qty: 12,
    price: 200,
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  };

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart(): void {
    const item: Item = {
      ...this.product,
      selectedQty: 1,
      subTotal: this.product.price
    };
    this.cartService.add(item);
  }
}
