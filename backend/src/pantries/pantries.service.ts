import { Injectable } from '@nestjs/common';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PantriesService {
  constructor(private prisma: PrismaService) {}

  create(createPantryDto: CreatePantryDto) {
    return this.prisma.pantry.create({
      data: createPantryDto,
      include: {
        staff: true,
        patients: true,
        performance: true,
      },
    });
  }

  findAll() {
    return this.prisma.pantry.findMany({
      include: {
        staff: true,
        patients: true,
        performance: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.pantry.findUnique({
      where: { id },
      include: {
        staff: true,
        patients: true,
        performance: true,
      },
    });
  }

  update(id: string, updatePantryDto: UpdatePantryDto) {
    return this.prisma.pantry.update({
      where: { id },
      data: updatePantryDto,
      include: {
        staff: true,
        patients: true,
        performance: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.pantry.delete({
      where: { id },
      include: {
        staff: true,
        patients: true,
        performance: true,
      },
    });
  }
}
