import {IProduct} from "./product";


export interface IOrder {
    total: number;
    totalItems: number;
    items: Item[]
}


export interface Item extends IProduct{
    selectedQty: number;
    subTotal: number;
}

