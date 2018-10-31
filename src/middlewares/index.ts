import * as BodyParser from 'body-parser';
import * as Volleyball from 'volleyball';
import * as Cors from 'cors';

export const Middleware = (app) => {
    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({extended: false}));

    app.use(Cors());
    app.use(Volleyball);
    
};