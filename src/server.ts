import * as express from 'express';

const app = express();
const port = process.env.PORT;

export const Server = async () => {
    app.listen(port);
    console.log(`Application listening http://localhost:${port}`);
};