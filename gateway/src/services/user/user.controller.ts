import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.userService.createUser(payload);
  };

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }
}
