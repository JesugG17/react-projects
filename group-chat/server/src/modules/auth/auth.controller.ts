import { Request, Response } from "express";
import { LoginUserDto } from "./dto/login-user.dto";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";

export class AuthController {

    async login(req: Request, res: Response) {
        const authService = new AuthService();
        const loginUserDto = req.body as LoginUserDto

        const resp = await authService.login(loginUserDto);

        res.status(resp.code).json(resp);
    }

    async register(req: Request, res: Response) {
        const authService = new AuthService();
        const registerUserDto = req.body as RegisterUserDto

        const resp = await authService.register(registerUserDto);

        res.status(resp.code).json(resp);
    }

}