import { Controller, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('create_user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern('find_all_users')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('find_one_user')
  findOne(data: { id: number }) {
    return this.userService.findOne(data.id);
  }

  @MessagePattern('update_user')
  update(data: { id: number; updateUserDto: UpdateUserDto }) {
    return this.userService.update(data.id, data.updateUserDto);
  }

  @MessagePattern('delete_user')
  remove(data: { id: number }) {
    {
      return this.userService.remove(data.id);
    }
  }
}
