import { Injectable } from '@nestjs/common';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealPlansService {
  constructor(private prisma: PrismaService) {}

  create(createMealPlanDto: CreateMealPlanDto) {
    return this.prisma.mealPlan.createMany({ data: createMealPlanDto });
  }

  findAll() {
    return this.prisma.mealPlan.findMany();
  }

  findOne(id: string) {
    return this.prisma.mealPlan.findUnique({ where: { id } });
  }

  update(id: string, updateMealPlanDto: UpdateMealPlanDto) {
    return this.prisma.mealPlan.update({
      where: { id },
      data: updateMealPlanDto,
    });
  }

  remove(id: string) {
    return this.prisma.mealPlan.delete({ where: { id } });
  }
}
