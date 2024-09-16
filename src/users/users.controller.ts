import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto){
    if (createUserDto.password !== createUserDto.confirmPassword){
      throw new BadRequestException('passwords do not match');
    }
    return this.usersService.register(createUserDto);

  }
  
}