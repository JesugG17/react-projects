import { Router } from 'express';
import { check } from 'express-validator';

import { AuthController } from './auth.controller';
import { catchErrors } from '../../common/middlewares/catchErrors';

const router = Router();

const authController = new AuthController();

router.post('/login', authController.login);

router.post('/register',[
    check('email', 'This email is not valid').isEmail(),
    catchErrors
], authController.register);

export default router;
