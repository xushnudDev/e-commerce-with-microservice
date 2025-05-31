import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UserClient implements OnModuleInit {
  private client: ClientProxy;

  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'user_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  };

  createUser(data: CreateUserDto) {
    return this.client.send('create_user',data);
  };

  findAllUsers() {
    return this.client.send('find_all_users', "");
  };

  findOneUser(id: number) {
    return this.client.send('find_one_user', { id });
  };

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.client.send('update_user', { id, updateUserDto });
  };

  deleteUser(id: number) {
    return this.client.send('delete_user', { id });
  };
}
