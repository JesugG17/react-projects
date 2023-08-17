import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';

export class AuthController {
  async login(req: Request, res: Response) {
    const authService = new AuthService();
    const loginUserDto = req.body as LoginUserDto;

    const response = await authService.login(loginUserDto);

    res.status(response.code).json(response);
  }

  async register(req: Request, res: Response) {
    const authService = new AuthService();
    const createUserDto = req.body as CreateUserDto;

    const response = await authService.register(createUserDto);

    res.status(response.code).json(response);
  }
}
