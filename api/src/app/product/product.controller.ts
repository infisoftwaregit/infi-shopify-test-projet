import {NextFunction, Request, Response} from "express";
import {Product} from "./product.model";

export const all = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productList = await Product.find({qty: {$gt: 0}});
        return res.json(productList);
    } catch (e) {
       throw new Error("Une erreur est survenue")
    }
};
