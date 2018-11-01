import {Router} from 'express';
import { GetAllGroceries, CreateGrocery, GetGrocery, UpdateGrocery, DeleteGrocery } from '../controllers/grocery.controller';
import {router as ItemRouter} from './item.routes';
import { Authenticate } from '../auth';

export const router = Router();

router.route('/')
    .get(GetAllGroceries)
    .post(Authenticate, CreateGrocery);
router.route('/:id')
    .get(GetGrocery)
    .put(UpdateGrocery)
    .delete(DeleteGrocery);
router.use('/:id/items',ItemRouter);