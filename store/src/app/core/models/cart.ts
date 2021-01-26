import {IProduct} from './product';

export interface Item extends IProduct{
  selectedQty: number;
  subTotal: number;
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
   * @param item
   * @param qty
   */
  add(item: Item): void {
    const findItem = this.items.find(i => i._id === item._id);
    if (findItem) {
      this.items = this.items.map(it => {
        if (it._id === item._id) {
          return {
            ...it,
            selectedQty: it.selectedQty + 1,
            subTotal: it.subTotal + it.price
          };
        }
        return it;
      });
    } else {
      this.items = [...this.items, {...item, subTotal: item.price}];
    }
    this.total = this.total + item.price;
    this.totalItems = this.totalItems + item.selectedQty;
  }
}
