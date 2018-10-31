import {} from 'typeorm';
import {GroceryList} from '../entities/groceryList';
import {Item} from '../entities/item';

export const GetAllItems = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const groceries: GroceryList= await GroceryList.findOne({where: {id}, relations: ['items']});
        res.status(200).json(groceries.items);
    }catch(err){
        next(err)
    }
};
export const GetItem = async (req, res, next) =>{
    try{
        const {itemId} = req.params;
        const item: Item = await Item.findOne({where: {id:itemId}});
        if(!item){
            throw new Error(`Item doesn't exist...`);
        }
        res.status(200).json(item);
    }catch(err){
        next(err)
    }
};
export const CreateItem = async (req, res, next) =>{
    try{
        const {id} = req.params;
        let item = await Item.create(req.body);
        item = await item.save();
        const grocery: GroceryList = await GroceryList.findOne({where: {id}, relations: ['items']});
        grocery.items.push(item);
        await grocery.save()
        res.status(201).json(item);
    }catch(err){
        next(err)
    }
};
export const UpdateItem = async (req, res, next) =>{
    try{
        const {itemId} = req.params;
        const item: Item = await Item.findOne({where: {id: itemId}});
        item.name = req.body.name;
        await item.save();
        res.status(200).json(item);
    }catch(err){
        next(err)
    }
};
export const DeleteItem = async (req, res, next) =>{
    try{
        const {itemId} = req.params;
        const item: Item = await Item.findOne({where: {id: itemId}});
        await item.remove();
        res.status(200).json({message: 'Item successfully deleted!!!'});
    }catch(err){
        next(err)
    }
};


