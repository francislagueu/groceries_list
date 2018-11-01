import {} from 'typeorm';
import {GroceryList} from '../entities/groceryList';
import {Item} from '../entities/item';

export const GetAllGroceries = async (req, res, next) =>{
    try{
        const groceries: GroceryList[] = await GroceryList.find({relations: ['items', 'user']});
        res.status(200).json(groceries);
    }catch(err){
        next(err)
    }
};
export const GetGrocery = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const grocery: GroceryList = await GroceryList.findOne({where: {id}, relations:['items', 'users']});
        if(!grocery){
            throw new Error(`Grocery doesn't exist...`);
        }
        res.status(200).json(grocery);
    }catch(err){
        next(err)
    }
};
export const CreateGrocery = async (req, res, next) =>{
    try{
        const grocery: GroceryList = await GroceryList.create({...req.body, user: req.user});
        await grocery.save()
        res.status(201).json(grocery);
    }catch(err){
        next(err)
    }
};
export const UpdateGrocery = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const grocery: GroceryList = await GroceryList.findOne({where: {id}, relations:['items', 'user']});
        grocery.name = req.body.name;
        await grocery.save();
        res.status(200).json(grocery);
    }catch(err){
        next(err)
    }
};
export const DeleteGrocery = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const grocery: GroceryList = await GroceryList.findOne({where: {id}, relations:['items', 'user']});
        await grocery.remove();
        res.status(200).json({message: 'Grocery list successfully deleted!!!'});
    }catch(err){
        next(err)
    }
};


