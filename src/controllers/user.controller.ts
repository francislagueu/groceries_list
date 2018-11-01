import { User } from "../entities/user";

export const LoginUser = async (req, res, next)=>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({where: {username}});
        if(!user || !(user.comparePassword(password))){
            throw new Error('Invalid username or password');
        }
        return res.status(200).json(user.userResponseObject());
    }catch(err){
        next(err);
    }
}
export const RegisterUser = async (req, res, next)=>{
    try{
        const {username} = req.body;
        let user = await User.findOne({where: {username}});
        if(user){
            throw new Error('User already exists');
        }
        user = await User.create(req.body);
        await user.save();
        return res.status(201).json(user.userResponseObject());
    }catch(err){
        next(err);
    }
}
export const GetUser = async (req, res, next)=>{
    console.log(req.user);
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
