import {Router} from 'express';
import { GetAllItems, CreateItem, GetItem, UpdateItem, DeleteItem } from '../controllers/item.controller';

export const router = Router({mergeParams: true});

router.route('/')
    .get(GetAllItems)
    .post(CreateItem);
router.route('/:itemId')
    .get(GetItem)
    .put(UpdateItem)
    .delete(DeleteItem)
 