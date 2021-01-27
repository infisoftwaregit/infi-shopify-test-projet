import {Cart, Item} from '../models';
import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {AlertService} from './alert.service';

@Injectable()
export class CartService {

  private cartStock: Cart = new Cart();
  private readonly cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cartStock);
  public cart$: Observable<Cart> = this.cart.asObservable();

  constructor(
    private alertService: AlertService
  ) {
  }

  getCart(): Observable<Cart> {
    return this.cart$;
  }

  getTotalItems(): Observable<number>{
    return this.cart$.pipe(
      map(data => data.totalItems)
    );
  }

  add(item: Item): void {
    // check qty here
    const existingItem = this.cartStock.items.find(value => value._id === item._id);
    if (existingItem && (existingItem.selectedQty >= item.qty)) {
      this.alertService.show({type: 'danger', message: 'Quantite insuffisante'});
      return;
    }
    this.cartStock.add(item);
    this.cart.next(this.cartStock);
    this.alertService.show({type: 'success', message: 'Produit ajouter au panier'});
  }

  updateQty(item: Item, qty: number): void {
    this.cartStock.updateQty(item, qty);
    this.cart.next(this.cartStock);
  }
}
