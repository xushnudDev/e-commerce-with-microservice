import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserClient } from "./user.client";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserClient,UserService],
})

export class UserModule {}