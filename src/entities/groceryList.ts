import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Item } from './item';
import { User } from './user';

@Entity('groceries')
export class GroceryList extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'text', unique: true})
    name: string;
    @CreateDateColumn({type: 'timestamp'})
    created: string;
    @UpdateDateColumn({type: 'timestamp'})
    updated: string;
    @OneToMany(type => Item, item => item.grocery_list)
    @JoinColumn()
    items: Item[];
    @ManyToOne(type => User, user=> user.grocery_list)
    user: User;
    
}