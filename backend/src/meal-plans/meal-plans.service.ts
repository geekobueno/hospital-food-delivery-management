import { Injectable } from '@nestjs/common';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealPlansService {
  constructor(private prisma: PrismaService) {}

  create(createMealPlanDto: CreateMealPlanDto) {
    return this.prisma.mealPlan.create({
      data: createMealPlanDto,
      include: {
        patient: true,
        preparedBy: true,
        deliveredBy: true,
        mealBox: true,
        alerts: true,
      },
    });
  }

  findAll() {
    return this.prisma.mealPlan.findMany({
      include: {
        patient: true,
        preparedBy: true,
        deliveredBy: true,
        mealBox: true,
        alerts: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.mealPlan.findUnique({
      where: { id },
      include: {
        patient: true,
        preparedBy: true,
        deliveredBy: true,
        mealBox: true,
        alerts: true,
      },
    });
  }

  update(id: string, updateMealPlanDto: UpdateMealPlanDto) {
    return this.prisma.mealPlan.update({
      where: { id },
      data: updateMealPlanDto,
      include: {
        patient: true,
        preparedBy: true,
        deliveredBy: true,
        mealBox: true,
        alerts: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.mealPlan.delete({
      where: { id },
      include: {
        patient: true,
        preparedBy: true,
        deliveredBy: true,
        mealBox: true,
        alerts: true,
      },
    });
  }
}
