import express, {Response, Request, NextFunction} from 'express';
import mongoose from 'mongoose';
import {environment} from "./environments/environment";
import morgan from 'morgan';
import cors from 'cors';

import {productRoute} from './app/product';
import {orderRoute} from './app/order';

const app = express();

// basic setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req: Request<any>, res: Response<any>, next: NextFunction) => {
    res.json({companyName: 'InfiSoftware'})
});

// Routes
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

// handle errors
app.use(function(req: Request, res: Response, next: NextFunction) {
    next({message: 'Not Found', status: 404});
});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500).json({
        message: err.message,
        status: err.status || 500
    });
});

let PORT = process.env.PORT || `${environment.PORT}`;

mongoose.connect(`${environment.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log('Listening at http://localhost:' + PORT);
        });
        server.on('error', console.error);
    })
    .catch(err => {
        console.log(err);
    });
