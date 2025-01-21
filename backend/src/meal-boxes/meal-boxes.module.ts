import { Module } from '@nestjs/common';
import { MealBoxesService } from './meal-boxes.service';
import { MealBoxesController } from './meal-boxes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MealBoxesController],
  providers: [MealBoxesService],
  imports: [PrismaModule],
})
export class MealBoxesModule {}
