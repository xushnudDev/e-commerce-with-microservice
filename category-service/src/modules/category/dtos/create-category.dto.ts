import { IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsOptional()
    @IsString()
    description?: string;
}