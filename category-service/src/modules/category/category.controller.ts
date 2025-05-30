import { Controller } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateCategoryDto } from "./dtos/create-category.dto";
import { UpdateCategoryDto } from "./dtos/update-category.dto";

@Controller()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @MessagePattern('get_all_categories')
    async findAll() {
        return await this.categoryService.getAll();
    }

    @MessagePattern('create_category')
    async create(@Payload() data: CreateCategoryDto) {
        return await this.categoryService.create(data);
    }

    @MessagePattern('update_category')
    async update(@Payload() data: { id: string; payload: UpdateCategoryDto }) {
        return await this.categoryService.update(data.id, data.payload);
    }

    @MessagePattern('delete_category')
    async delete(@Payload() data: { id: string }) {
        return await this.categoryService.delete(data.id);
    }
}
