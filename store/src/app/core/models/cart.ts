import {IProduct} from './product';

export interface Item extends IProduct{
  selectedQty: number;
  subTotal: number;
  qtyArray?: Array<any>;
}

export class Cart {
  public items: Item[];
  public total: number;
  public totalItems: number;

  constructor() {
    this.items = [];
    this.total = 0;
    this.totalItems = 0;
  }

  /**
   * Add to cart with default qty: 1
   * @param item - item to be added
   * @param qty - optional
   */
  add(item: Item): void {
    const findItem = this.items.find(i => i._id === item._id);
    if (findItem) {
      this.items = this.items.map(it => {
        if (it._id === item._id) {
          return {
            ...it,
            selectedQty: +it.selectedQty + 1,
            subTotal: it.subTotal + it.price
          };
        }
        return it;
      });
    } else {
      this.items = [...this.items, {...item, subTotal: item.price}];
    }
    this.updateCart();
  }

  updateQty(item: Item, qty: number): void {
    const updatedItem = {...item, selectedQty: +qty, subTotal: item.price * qty};
    this.items = this.items.map(ite => {
      if (ite._id === item._id) {
        return updatedItem;
      }
      return ite;
    });
    this.updateCart();
  }

  private updateCart(): void{
    this.total = 0;
    this.totalItems = 0;
    this.items.forEach(data => {
      this.total += +data.subTotal;
      this.totalItems += +data.selectedQty;
    });

  }
}
