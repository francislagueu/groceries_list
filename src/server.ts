import * as express from 'express';

const app = express();
const port = 8080;

export const Server = async () => {
    app.listen(port);
    console.log(`Application listening http://localhost:${port}`);
};