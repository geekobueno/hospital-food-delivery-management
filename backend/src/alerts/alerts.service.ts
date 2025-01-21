import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlertsService {
  constructor(private prisma: PrismaService) {}

  create(createAlertDto: CreateAlertDto) {
    return this.prisma.alert.create({
      data: createAlertDto,
      include: {
        mealPlan: true, // Include related meal plan in the response
      },
    });
  }

  findAll() {
    return this.prisma.alert.findMany({
      include: {
        mealPlan: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.alert.findUnique({
      where: { id },
      include: {
        mealPlan: true,
      },
    });
  }

  update(id: string, updateAlertDto: UpdateAlertDto) {
    return this.prisma.alert.update({
      where: { id },
      data: updateAlertDto,
      include: {
        mealPlan: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.alert.delete({
      where: { id },
      include: { mealPlan: true },
    });
  }
}
