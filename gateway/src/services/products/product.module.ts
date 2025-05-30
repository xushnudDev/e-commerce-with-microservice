import { Module } from "@nestjs/common";
import { ProductClient } from "./product.client";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
    providers: [ProductClient,ProductService],
    controllers: [ProductController],
})
export class ProductModule {}