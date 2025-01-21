import { Injectable } from '@nestjs/common';
import { CreateMealBoxDto } from './dto/create-meal-box.dto';
import { UpdateMealBoxDto } from './dto/update-meal-box.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealBoxesService {
  constructor(private prisma: PrismaService) {}

  create(createMealBoxDto: CreateMealBoxDto) {
    return this.prisma.mealBox.create({
      data: createMealBoxDto,
      include: {
        mealPlan: true,
      },
    });
  }

  findAll() {
    return this.prisma.mealBox.findMany({
      include: {
        mealPlan: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.mealBox.findUnique({
      where: { id },
      include: {
        mealPlan: true,
      },
    });
  }

  update(id: string, updateMealBoxDto: UpdateMealBoxDto) {
    return this.prisma.mealBox.update({
      where: { id },
      data: updateMealBoxDto,
      include: {
        mealPlan: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.mealBox.delete({
      where: { id },
      include: {
        mealPlan: true,
      },
    });
  }
}
