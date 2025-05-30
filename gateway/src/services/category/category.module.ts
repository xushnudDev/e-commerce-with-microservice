import { Module } from "@nestjs/common";
import { CategoryClient } from "./category.client";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { ProductClient } from "../products";

@Module({
    providers: [CategoryClient,CategoryService,ProductClient],
    controllers: [CategoryController],
})
export class CategoryModule {}