import {all, create} from './order.controller';
import {Router} from 'express';


export const orderRoute = Router();


orderRoute.post('', create);
orderRoute.get('', all);
