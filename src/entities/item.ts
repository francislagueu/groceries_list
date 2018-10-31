import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { GroceryList } from './groceryList';

@Entity('items')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'text'})
    name: string;
    @Column({type: 'boolean', default: false})
    completed: boolean;
    @CreateDateColumn({type: 'timestamp'})
    created: string;
    @UpdateDateColumn({type: 'timestamp'})
    updated: string;
    @ManyToOne(type => GroceryList, grocelist => grocelist.items)
    grocery_list: GroceryList
}