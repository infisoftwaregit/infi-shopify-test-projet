import {Router} from 'express'
import {all} from "./product.controller";

export const productRoute = Router();
productRoute.get('', all);
