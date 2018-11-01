import {Router} from 'express';
import { LoginUser, RegisterUser, GetUser } from '../controllers/user.controller';
import { Authenticate } from '../auth';

export const router = Router();

router.route('/login')
    .post(LoginUser);
router.route('/register')
    .post(RegisterUser);
router.route('/user')
    .get(Authenticate, GetUser);