import { Router } from 'express';
import { check } from 'express-validator';

import { AuthController } from './auth.controller';
import { catchErrors } from '../../common/middlewares/catchErrors';
import { isEmailTaken } from '../../common/utils/isEmailTaken';

const router = Router();

const authController = new AuthController();

router.post('/login', authController.login);

router.post(
  '/register',
  [
    check('email', 'This email is not valid').isEmail(),
    check('email').custom(isEmailTaken),
    catchErrors,
  ],
  authController.register
);

export default router;
