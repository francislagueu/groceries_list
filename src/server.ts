import * as express from 'express';
import {Middleware} from './middlewares/index';
import {router as GroceryRoutes} from './routes/grocery.routes';
import { NotFoundError, ErrorHandler } from './middlewares/errors.middleware';

const app = express();
const port = process.env.PORT;

Middleware(app);
app.use('/api/groceries', GroceryRoutes);

app.use(NotFoundError);
app.use(ErrorHandler);

export const Server = async () => {
    await app.listen(port);
    console.log(`Application listening http://localhost:${port}`);
};