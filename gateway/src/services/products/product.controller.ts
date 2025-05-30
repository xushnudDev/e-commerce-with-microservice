import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dtos";
import { UpdateCategoryDto } from "../category";

@Controller("products")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    async createProduct(@Body() payload: CreateProductDto) {
        return this.productService.createProduct(payload);
    };

    @Get()
    async getProducts() {
        return this.productService.getProducts();
    };

    @Get(":id")
    async getProductById(@Param("id") id: string) {
        return this.productService.getProductById({id});
    };

    @Put(":id")
    async updateProduct(@Param("id") id: string, @Body() payload: UpdateCategoryDto) {
        return this.productService.updateProduct({id, payload});
    };

    @Delete(":id")
    async deleteProduct(@Param("id") id: string) {
        return this.productService.deleteProduct({id});
    }
}