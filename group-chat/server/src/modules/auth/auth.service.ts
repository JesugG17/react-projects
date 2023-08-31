import { StatusCodes } from 'http-status-codes';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

export class AuthService {
  async login(loginUserDto: LoginUserDto) {
    try {
      return {
        data: null,
        message: '',
        code: 0
      }
    } catch (error) {
      return {
        data: null,
        message: 'An error has ocurred while login',
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async register(registerUserDto: RegisterUserDto) {
    try {
      return {
        data: null,
        message: '',
        code: 0
      }
    } catch (error) {
      return {
        data: null,
        message: 'An error has ocurred while register',
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
