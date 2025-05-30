import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({collection: "products",timestamps: true,versionKey: false})
export class ProductModel {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    price: number;


    @Prop({type: Types.ObjectId, ref: "CategoryModel",required: true})
    category: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);