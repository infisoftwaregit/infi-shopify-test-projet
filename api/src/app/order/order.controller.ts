import {NextFunction, Request, Response} from "express";
import {Order} from "./order.model";
import {Item} from "../../libs";
import {Product} from "../product/product.model";


export const all = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await Order.find();
        return res.json(orders);
    } catch (e) {
        throw new Error("Une erreur est survenue");
    }
};


export const create = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const order = new Order(req.body);
        await order.save();
        // update product qty
        for (let item of req.body.items) {
            let prodI = await Product.findById(item._id);
            if (prodI) {
                prodI.qty = prodI.qty - item.selectedQty;
                await prodI.save();
            }
        }
        req.body.items.forEach((item: Item) => {

        });
        return res.json(order);
    } catch (e) {
        throw new Error("Une erreur est survenue");
    }
};
