import { Injectable } from "@nestjs/common";
import { UserClient } from "./user.client";
import { CreateUserDto } from "./dtos";

@Injectable()
export class UserService {
    constructor(private readonly userClient: UserClient) {}

    createUser(data: CreateUserDto) {
        return this.userClient.createUser(data);
    };

    findAllUsers() {
        return this.userClient.findAllUsers();
    }
} 