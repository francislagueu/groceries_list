
import 'dotenv/config';
import {Server} from './server';
import { Connection } from './database';

(async ()=>{
    await Connection();
    await Server();
})()
