import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('items')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'text'})
    name: string;
    @Column({type: 'boolean'})
    completed: boolean;
    @CreateDateColumn({type: 'timestamp'})
    created: string;
    @UpdateDateColumn({type: 'timestamp'})
    updated: string;
}