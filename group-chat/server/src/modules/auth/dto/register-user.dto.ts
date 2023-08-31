import { LoginUserDto } from "./login-user.dto";

export interface RegisterUserDto extends LoginUserDto {
    userName: string;
}