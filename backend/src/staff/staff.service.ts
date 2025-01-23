import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  create(createStaffDto: CreateStaffDto) {
    return this.prisma.staff.create({
      data: createStaffDto,
      include: {
        user: true,
        pantry: true,
        preparedMeals: true,
        deliveredMeals: true,
      },
    });
  }

  findAll() {
    return this.prisma.staff.findMany({
      include: {
        user: true,
        pantry: true,
        preparedMeals: true,
        deliveredMeals: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.staff.findUnique({
      where: { id },
      include: {
        user: true,
        pantry: true,
        preparedMeals: true,
        deliveredMeals: true,
      },
    });
  }

  update(id: string, updateStaffDto: UpdateStaffDto) {
    return this.prisma.staff.update({
      where: { id },
      data: updateStaffDto,
      include: {
        user: true,
        pantry: true,
        preparedMeals: true,
        deliveredMeals: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.staff.delete({
      where: { id },
      include: {
        user: true,
        pantry: true,
        preparedMeals: true,
        deliveredMeals: true,
      },
    });
  }
}
