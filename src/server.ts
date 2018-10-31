import * as express from 'express';
import { NotFoundError, ErrorHandler } from './middlewares/errors.middleware';
import {router as GroceryRoutes} from './routes/grocery.routes';

const app = express();
const port = process.env.PORT;

app.use('/api/groceries', GroceryRoutes);

app.use(NotFoundError);
app.use(ErrorHandler);

export const Server = async () => {
    await app.listen(port);
    console.log(`Application listening http://localhost:${port}`);
};