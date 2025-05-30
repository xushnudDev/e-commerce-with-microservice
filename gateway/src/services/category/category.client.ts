import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';

@Injectable()
export class CategoryClient {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  findAllCategories() {
    return this.client.send('get_all_categories', '');
  }

  

  createCategory(payload: CreateCategoryDto) {
    return this.client.send('create_category', payload);
  }

  updateCategory(data: { id: string; payload: UpdateCategoryDto }) {
    return this.client.send('update_category', data);
  }

  deleteCategory(payload: { id: string }) {
    return this.client.send('delete_category', payload);
  }
}
