import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto, UpdateCategoryDto } from "./dtos";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    getAll() {
        return this.categoryService.getAll();
    }

    @Post()
    create(@Body() payload: CreateCategoryDto) {
        return this.categoryService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: UpdateCategoryDto) {
        return this.categoryService.update({ id, payload });
    }

    @Delete(":id")
    delete(@Param('id') id: string) {
        return this.categoryService.delete({ id });
    }
}
