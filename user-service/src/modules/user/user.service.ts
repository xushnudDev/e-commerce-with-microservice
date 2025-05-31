import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async create(createUserDto: CreateUserDto) {
    const foundedUser = await this.userModel.findOne({
      where: {
        email: createUserDto.email,
      }
    });
    if (foundedUser) {
      throw new ConflictException('User already exists');
    }
    const user = await this.userModel.create({
      lastname: createUserDto.lastname,
      firstname: createUserDto.firstname,
      email: createUserDto.email,
      phone: createUserDto.phone,
    });
    return {
      message: 'User created successfully',
      data: user,
    }
  }

  async findAll() {
    const data = await this.userModel.findAll();
    return data;
  }

  async findOne(id: number) {
    const userId = await this.userModel.findByPk(id);
    if (!userId) {
      throw new NotFoundException('User not found');
    };
    return {
      message: 'User found successfully',
      data: userId,
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
  if (!id) {
    throw new NotFoundException('User not found');
  };

  const [affectedRows] = await this.userModel.update(updateUserDto, {
    where: {
      id: id,
    }
  });

  if (affectedRows === 0) {
    throw new NotFoundException('User not updated or not found');
  }

  const updatedUser = await this.userModel.findByPk(id);

  return {
    message: 'User updated successfully',
    data: updatedUser,
  };
}


  remove(id: number) {
    if(!id) {
      throw new NotFoundException('User not found');
    };
    return this.userModel.destroy({
      where: {
        id: id,
      }
    });
  }
}
