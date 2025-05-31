import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1982',
      database: 'users',
      sync: {
        alter: true,
      },
      autoLoadModels: true,
    }),
    UserModule
  ],
  
})
export class AppModule {}
