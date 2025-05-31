import { Column, Model, Table } from "sequelize-typescript";

@Table({tableName: 'users', timestamps: true})
export class User extends Model {
    @Column({})
    name: string;

    @Column({unique: true})
    email: string;
}