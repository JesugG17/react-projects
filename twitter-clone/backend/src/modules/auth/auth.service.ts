import { StatusCodes } from 'http-status-codes';
import { validate } from 'class-validator';
import bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/createUser.dto';
import { User } from '../../common/models/schemas/user.schema';
import { generateJWT } from '../../common/utils/generateJWT';

export class AuthService {

    async login() {

    }

    async register(createUserDto: CreateUserDto) {
        try {
            
            const errors = await validate(createUserDto);
            
            if (errors.length > 0)  {
                return {
                    data: null,
                    message: errors[0],
                    code: StatusCodes.BAD_REQUEST
                }
            }
            const salt = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync(createUserDto.password, salt);
            createUserDto.password = hashedPassword;

            const newUser = new User(createUserDto);

            const token = await generateJWT(newUser.id);

            await newUser.save();

            return {
                data: {
                    user: {
                        userName: newUser.userName,
                        email: newUser.email,
                        photoUrl: newUser.photoUrl
                    },
                    token
                },
                message: 'User registered successfully',
                code: StatusCodes.OK
            }

        } catch (error) {
            return  {
                data: null,
                message: 'An error has ocurred while registering user',
                code: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
    }

}
