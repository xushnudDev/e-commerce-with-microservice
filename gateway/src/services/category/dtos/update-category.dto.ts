import { IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;
}
