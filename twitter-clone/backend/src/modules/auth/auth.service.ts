import { StatusCodes } from 'http-status-codes';
import { validate } from 'class-validator';
import bcrypt from 'bcrypt';

import { CreateUserDto, LoginUserDto } from './dto';
import { User } from '@/common/models/schemas/user.schema';
import { generateJWT } from '@/common/utils/generateJWT';
import { AuthResponse } from '@/common/types/interfaces/auth.response';

export class AuthService {
  async login(loginUserDto: LoginUserDto): Promise<AuthResponse> {
    try {
      const user = await User.findOne({ email: loginUserDto.email });

      if (!user || !user.isActive) {
        return {
          data: null,
          message: 'The email is incorrect',
          code: StatusCodes.BAD_REQUEST,
        };
      }

      const isValidPassword = bcrypt.compareSync(loginUserDto.password, user.password as string);

      if (!isValidPassword) {
        return {
          data: null,
          message: 'The password is incorrect',
          code: StatusCodes.BAD_REQUEST,
        };
      }

      const token = await generateJWT(user.id);

      return {
        data: {
          user: {
            userName: user.userName as string,
            photoUrl: user.photoUrl,
          },
          token,
        },
        message: 'User login successfully',
        code: StatusCodes.OK,
      };
    } catch (error) {
      return {
        data: null,
        message: 'An error has ocurred while login...',
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async register(createUserDto: CreateUserDto): Promise<AuthResponse> {
    try {
      const errors = await validate(createUserDto);

      if (errors.length > 0) {
        return {
          data: null,
          message: 'Some data has the incorrect format',
          code: StatusCodes.BAD_REQUEST,
        };
      }
      const salt = bcrypt.genSaltSync();
      const hashedPassword = bcrypt.hashSync(createUserDto.password, salt);
      createUserDto.password = hashedPassword;

      const user = new User(createUserDto);

      await user.save();

      return {
        data: null,
        message: 'User registered successfully',
        code: StatusCodes.OK,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        message: 'An error has ocurred while registering user',
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async googleSignIn() {

  }

  async githubSignIn() {
    
  }
}
