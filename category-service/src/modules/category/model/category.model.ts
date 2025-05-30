import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection: 'categories',timestamps: true,versionKey: false})
export class CategoryModel {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryModel);