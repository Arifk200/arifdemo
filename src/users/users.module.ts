import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UserDetails } from './entities/user-details.entity';
import { OTPService } from '../otp/services/otp.service'; 
import { Otp } from '../otp/entities/otp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserDetails, Otp])],
  providers: [UsersService, OTPService],
  controllers: [UsersController],
})
export class UsersModule {}
