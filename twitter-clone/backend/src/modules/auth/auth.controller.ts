import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

export class AuthController {

    async login(req: Request, res: Response) {
        const authService = new AuthService();

        const response = await authService.login();

        res.json(response);
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();
        const createUserDto = req.body as CreateUserDto

        const response = await authService.register(createUserDto);

        res.status(response.code).json(response);
    }
}
