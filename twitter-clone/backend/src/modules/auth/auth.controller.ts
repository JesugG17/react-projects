import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../../common/models/schemas/user.schema';

export class AuthController {

    async login(req: Request, res: Response) {
        const authService = new AuthService();
        const user = new User({ userName: 'Jesus', email: 'jesus@gmail.com', password: '123456'})
        await user.save();
        res.json(user);
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();

    }
}
