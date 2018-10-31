import * as express from 'express';
import { NotFoundError, ErrorHandler } from './middlewares/errors.middleware';

const app = express();
const port = process.env.PORT;

app.use(NotFoundError);
app.use(ErrorHandler);

export const Server = async () => {
    await app.listen(port);
    console.log(`Application listening http://localhost:${port}`);
};