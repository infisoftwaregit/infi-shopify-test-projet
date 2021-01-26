import { Component, OnInit } from '@angular/core';
import {CartService} from '../core/services';
import {Observable} from 'rxjs';
import {Cart} from '../core/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart$: Observable<Cart> = new Observable<Cart>();
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
  }

}
