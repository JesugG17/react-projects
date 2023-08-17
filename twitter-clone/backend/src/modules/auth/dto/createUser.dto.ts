import { IsString, Min, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Min(1)
  userName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Min(6)
  password: string;
}
