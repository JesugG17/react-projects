import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

const authController = new AuthController();

router.post('/login', authController.login);

router.post('/register', authController.register);


export default router;