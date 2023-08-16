import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export class AuthController {

    async login(req: Request, res: Response) {
        const authService = new AuthService();
        res.json({msg: 'hola'});
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();

    }
}
