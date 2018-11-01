import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { GroceryList } from './groceryList';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: 'text', unique: true})
    username: string;
    @Column({type: 'text', unique: true})
    email: string;
    @Column({type: 'text'})
    password: string;
    @Column({type: 'text'})
    first_name: string;
    @Column({type: 'text'})
    last_name: string;
    @CreateDateColumn({type: 'timestamp'})
    created_at: string;
    @UpdateDateColumn({type: 'timestamp'})
    updated_at: string;
    @OneToMany(type => GroceryList, grocerylist => grocerylist.user)
    grocery_list: GroceryList[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }

    userResponseObject(flag: boolean = true) {
        const {id, created_at, updated_at, first_name, last_name, email, username, token} = this;
       const response:any =  {id, username, email, first_name, last_name, created_at, updated_at};
       if(flag){
           response.token = token;
       }
       return response;
    }

    async comparePassword(str: string){
        return await bcrypt.compare(str, this.password);
    }

    private get token() {
        const {id, username, email, first_name, last_name} = this;
        return jwt.sign({
            id, username, email, first_name, last_name
        }, process.env.SECRET, {expiresIn: '1d'});
    }

}