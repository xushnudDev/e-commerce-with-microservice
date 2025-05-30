import { Injectable } from "@nestjs/common";
import { CategoryClient } from "./category.client";
import { CreateCategoryDto, UpdateCategoryDto } from "./dtos";
import { ProductClient } from "../products";
import { lastValueFrom } from "rxjs";

@Injectable()
export class CategoryService {
    constructor(private readonly categoryClient: CategoryClient,private readonly productClient: ProductClient) {}

    async getAll() {
        const res: any[] = [];
        const categories = await lastValueFrom(this.categoryClient.findAllCategories());

        for (let c of categories.data) {
            const products = await lastValueFrom(this.productClient.getProductsByCategory(c._id));
            res.push({ ...c, products: products.data });
        };
        return {
            data: res
        }
    }

    create(payload: CreateCategoryDto) {
        return this.categoryClient.createCategory(payload);
    }

    update(data: { id: string; payload: UpdateCategoryDto }) {
        return this.categoryClient.updateCategory(data);
    }

    delete(data: { id: string }) {
        return this.categoryClient.deleteCategory(data);
    }
}
