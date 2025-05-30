import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CategoryModel } from "./model";
import { CreateCategoryDto } from "./dtos/create-category.dto";
import { UpdateCategoryDto } from "./dtos/update-category.dto";

@Injectable()
export class CategoryService {
    constructor(@InjectModel(CategoryModel.name) private categoryModel: Model<CategoryModel>) {}

    async getAll() {
        const categories = await this.categoryModel.find();
        return {
            message: 'success',
            data: categories,
            count: categories.length,
        };
    }

    async create(payload: CreateCategoryDto) {
        const found = await this.categoryModel.findOne({ name: payload.name });
        if (found) {
            throw new ConflictException('Category already exists');
        }
        const newCategory = await this.categoryModel.create(payload);
        return {
            message: 'success',
            data: newCategory,
        };
    }

    async update(id: string, payload: UpdateCategoryDto) {
        const found = await this.categoryModel.findById(id);
        if (!found) {
            throw new NotFoundException('Category not found');
        }
        const updated = await this.categoryModel.findByIdAndUpdate(id, payload, { new: true });
        return {
            message: 'success',
            data: updated,
        };
    }

    async delete(id: string) {
        const deleted = await this.categoryModel.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException('Category not found');
        }
        return {
            message: 'success',
            data: deleted,
        };
    }
}
