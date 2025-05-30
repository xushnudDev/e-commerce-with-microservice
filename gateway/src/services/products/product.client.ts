import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateProductDto, UpdateProductDto } from './dtos';

@Injectable()
export class ProductClient {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3002,
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  createProduct(data: CreateProductDto) {
    return this.client.send('create_product', data);
  }

  getProducts() {
    return this.client.send('get_all_products', '');
  }
  getProductsByCategory(categoryId: string) {
    return this.client.send('get_products_by_category', { categoryId });
  }
  getProductById(data: { id: string }) {
    return this.client.send('get_product_by_id', data);
  }

  updateProduct(data: { id: string; payload: UpdateProductDto }) {
    return this.client.send('update_product', data);
  }

  deleteProduct(data: { id: string }) {
    return this.client.send('delete_product', data);
  }
}
