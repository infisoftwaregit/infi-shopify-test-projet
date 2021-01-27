import {IOrder} from "../../libs";
import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface OrderDocument extends Document, IOrder {}

const orderSchema = new Schema(
    {
        total: Number,
        totalItems: Number,
        items: Array
    },
    { timestamps: true }
    );


export const Order = mongoose.model<OrderDocument>(
    'Order',
    orderSchema,
    'orders',
    true
);
