import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MealPlansService } from './meal-plans.service';
import { MealPlansController } from './meal-plans.controller';

@Module({
  controllers: [MealPlansController],
  providers: [MealPlansService],
  imports: [PrismaModule],
})
export class MealPlansModule {}
