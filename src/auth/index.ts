import * as jwt from 'jsonwebtoken';

export const Authenticate = async(req, res, next) => {
    const auth: string = req.headers.authorization;
    if(auth.split(' ')[0] !== 'Bearer'){
        throw new Error('Forbidden...');
    }
    const token = auth.split(' ')[1];
    try {
        const user = await jwt.verify(token, process.env.SECRET);
        req.user = user;
        next(null, user);
        //return res.status(200).json(user);
    }catch(err){
        next(err);
    }
    
}