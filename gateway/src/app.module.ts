import { Module } from '@nestjs/common';
import { CategoryModule, ProductModule, UserModule } from './services';

@Module({
  imports: [CategoryModule,ProductModule,UserModule],
  
})
export class AppModule {}
