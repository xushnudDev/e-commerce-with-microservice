import { Injectable } from "@nestjs/common";
import { ProductClient } from "./product.client";
import { CreateProductDto, UpdateProductDto } from "./dtos";

@Injectable()
export class ProductService {
    constructor(private productClient: ProductClient) {}

    async createProduct(data: CreateProductDto) {
        return this.productClient.createProduct(data);
    };

    async getProducts() {
        return this.productClient.getProducts();
    };

    async getProductById(data: {id: string}) {
        return this.productClient.getProductById(data);
    };

    async updateProduct(data: {id: string, payload: UpdateProductDto}) {
        return this.productClient.updateProduct(data);
    };

    async deleteProduct(data: {id: string}) {
        return this.productClient.deleteProduct(data);
    }
}