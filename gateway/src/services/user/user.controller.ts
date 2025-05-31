import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dtos';

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
  };

  @Get(':id')
  findOneUser(@Param("id") id: number) {
    return this.userService.findOneUser(id);
  };

  @Put(':id')
  updateUser(@Param("id") id: number, @Body() payload: UpdateUserDto) {
    return this.userService.updateUser(id, payload);
  };

  @Delete(':id')
  deleteUser(@Param("id") id: number) {
    return this.userService.deleteUser(id);
  }
}
