import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { OTPService } from '../otp/services/otp.service';
import { CreateUserDto } from './dto/create-user.dto';
import { OtpDto } from '../otp/dto/otp.dto';
import { UserDetailsDto } from './dto/user-details.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly otpService: OTPService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }
    const user = await this.usersService.register(createUserDto);
    const otp = await this.otpService.generateAndStoreOtp(user.email);
    return { message: 'User registered. Check your email for OTP.', otp };
  }

  @Post('verify-otp')
  async verifyOtp(@Body() otpDto: OtpDto) {
    const isValid = await this.otpService.verifyOtp(otpDto.email, otpDto.otp);
    if (isValid) {
      await this.usersService.updateUserVerificationStatus(otpDto.email);
      return { message: 'OTP verified successfully.' };
    } else {
      throw new BadRequestException('Invalid or expired OTP.');
    }
  }

  @Post('details')
  async addUserDetails(
    @Body('email') email: string, 
    @Body() userDetailsDto: UserDetailsDto
  ) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.isVerified) {
      throw new BadRequestException('User not found or not verified');
    }
  
    const details = await this.usersService.addUserDetails(user.email, userDetailsDto);
    return { message: 'User details added successfully', details };
  }
  
}
