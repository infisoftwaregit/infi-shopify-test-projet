import mongoose, { Schema, Document } from 'mongoose';
import {IProduct} from "../../libs";

export interface ProductDocument extends  Document,  IProduct {
}

const productSchema = new Schema(
    {
        name: String,
        price: Number,
        qty: Number,
        thumbnail: String,
        description: String,
    },
    { timestamps: true }
    );

export const Product = mongoose.model<ProductDocument>(
    'Product',
    productSchema,
    'products',
    true
);
