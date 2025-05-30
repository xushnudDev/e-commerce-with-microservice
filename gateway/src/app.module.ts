import { Module } from '@nestjs/common';
import { CategoryModule, ProductModule } from './services';

@Module({
  imports: [CategoryModule,ProductModule],
  
})
export class AppModule {}
