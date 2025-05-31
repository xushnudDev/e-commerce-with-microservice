import { Injectable } from "@nestjs/common";
import { UserClient } from "./user.client";
import { CreateUserDto, UpdateUserDto } from "./dtos";

@Injectable()
export class UserService {
    constructor(private readonly userClient: UserClient) {}

    createUser(data: CreateUserDto) {
        return this.userClient.createUser(data);
    };

    findAllUsers() {
        return this.userClient.findAllUsers();
    };

    findOneUser(id: number) {
        return this.userClient.findOneUser(id);
    }

    updateUser(id: number, data: UpdateUserDto) {
        return this.userClient.updateUser(id, data);
    };

    deleteUser(id: number) {
        return this.userClient.deleteUser(id);
    }
} 