import { Column, Model, Table } from "sequelize-typescript";

@Table({tableName: 'users', timestamps: true})
export class User extends Model {
    @Column({})
    lastname: string;

    @Column({})
    firstname: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    phone: string;
}