import { Component, OnInit } from '@angular/core';
import {CartService} from '../core/services';
import {Observable} from 'rxjs';
import {Cart, Item} from '../core/models';
import {map} from 'rxjs/operators';

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
    this.cart$ = this.cartService.getCart().pipe(
      map(cart => {
        return {
          ...cart,
          items: cart.items.map(item => {
            return {...item, qtyArray: new Array(item.qty)};
          })
        };
      })
    ) as Observable<Cart>;
  }

  changeSelectedQty(item: Item, event: Event): void {
    const qty: number = +(event.target as HTMLInputElement).value;
    this.cartService.updateQty(item, qty);
  }

  saveOrder(): void{
    this.cartService.save().subscribe();
  }
}
