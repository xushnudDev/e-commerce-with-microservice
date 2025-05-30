import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from './model';
import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from './dtos';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel.name)
    private readonly productModel: Model<ProductModel>,
  ) {}

  async create(payload: CreateProductDto) {
    const product = await this.productModel.create(payload);
    return {
      message: 'Product created successfully',
      data: product,
    };
  }

  async getAll() {
    const products = await this.productModel.find();
    return {
      message: 'Products retrieved successfully',
      data: products,
    };
  }

  async getById(id: string) {
    const product = await this.productModel.findById(id);
    return {
      message: 'Product retrieved successfully',
      data: product,
    };
  }

  async getByCategory(categoryId: string) {
    const products = await this.productModel.find({ category: categoryId });
    return { message: 'Products by category', data: products };
  }

  async update(id: string, payload: UpdateProductDto) {
    const found = await this.productModel.findById(id);
    if (!found) {
      throw new NotFoundException('Product not found');
    }
    const updateProduct = await this.productModel.findByIdAndUpdate(
      id,
      payload,
      { new: true },
    );
    return {
      message: 'Product updated successfully',
      data: updateProduct,
    };
  }

  async delete(id: string) {
    const found = await this.productModel.findById(id);
    if (!found) {
      throw new NotFoundException('Product not found');
    }
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    return {
      message: 'Product deleted successfully',
      data: deletedProduct,
    };
  }
}
