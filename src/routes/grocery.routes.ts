import {Router} from 'express';
import { GetAllGroceries, CreateGrocery, GetGrocery, UpdateGrocery, DeleteGrocery } from '../controllers/grocery.controller';
import {router as ItemRouter} from './item.routes';

export const router = Router();

router.route('/')
    .get(GetAllGroceries)
    .post(CreateGrocery);
router.route('/:id')
    .get(GetGrocery)
    .put(UpdateGrocery)
    .delete(DeleteGrocery);
router.use('/:id/items',ItemRouter);