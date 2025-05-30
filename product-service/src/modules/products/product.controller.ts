import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from './dtos';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('create_product')
  async createProduct(data: CreateProductDto) {
    return this.productService.create(data);
  }

  @MessagePattern('get_all_products')
  async getAllProducts() {
    return this.productService.getAll();
  }

  @MessagePattern('get_product_by_id')
  async getProductById(data: { id: string }) {
    return this.productService.getById(data.id);
  }

  @MessagePattern('get_products_by_category')
  getProductsByCategory(data: { categoryId: string }) {
    return this.productService.getByCategory(data.categoryId);
  }

  @MessagePattern('update_product')
  async updateProduct(data: { id: string; payload: CreateProductDto }) {
    return this.productService.update(data.id, data.payload);
  }

  @MessagePattern('delete_product')
  async deleteProduct(data: { id: string }) {
    return this.productService.delete(data.id);
  }
}
