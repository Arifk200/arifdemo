import { IsEmail, IsNotEmpty, IsString, Matches, MinLength, } from 'class-validator';

export class CreateUserDto{
  @IsEmail()
  @IsNotEmpty()
  email: string;

 @IsString()
 @MinLength(8)
 password: string;

 @IsString()
 @MinLength(8)
 @Matches('password')
 confirmPassword: string;

}
