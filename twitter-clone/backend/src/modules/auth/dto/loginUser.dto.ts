import { IsString, Min, IsEmail } from 'class-validator';
export class LoginUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Min(6)
  password: string;
}
