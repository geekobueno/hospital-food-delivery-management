import { Injectable } from '@nestjs/common';
import { CreateMealBoxDto } from './dto/create-meal-box.dto';
import { UpdateMealBoxDto } from './dto/update-meal-box.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealBoxesService {
  constructor(private prisma: PrismaService) {}

  create(createMealBoxDto: CreateMealBoxDto) {
    return this.prisma.mealBox.createMany({ data: createMealBoxDto });
  }

  findAll() {
    return this.prisma.mealBox.findMany();
  }

  findOne(id: string) {
    return this.prisma.mealBox.findUnique({ where: { id } });
  }

  update(id: string, updateMealBoxDto: UpdateMealBoxDto) {
    return this.prisma.mealBox.update({
      where: { id },
      data: updateMealBoxDto,
    });
  }

  remove(id: string) {
    return this.prisma.mealBox.delete({ where: { id } });
  }
}
