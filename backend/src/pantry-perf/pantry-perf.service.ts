import { Injectable } from '@nestjs/common';
import { CreatePantryPerfDto } from './dto/create-pantry-perf.dto';
import { UpdatePantryPerfDto } from './dto/update-pantry-perf.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PantryPerfService {
  constructor(private prisma: PrismaService) {}

  create(createPantryPerfDto: CreatePantryPerfDto) {
    return this.prisma.pantryPerformance.create({
      data: createPantryPerfDto,
      include: {
        pantry: true,
      },
    });
  }

  findAll() {
    return this.prisma.pantryPerformance.findMany({
      include: {
        pantry: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.pantryPerformance.findUnique({
      where: { id },
      include: {
        pantry: true,
      },
    });
  }

  update(id: string, updatePantryPerfDto: UpdatePantryPerfDto) {
    return this.prisma.pantryPerformance.update({
      where: { id },
      data: updatePantryPerfDto,
      include: {
        pantry: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.pantryPerformance.delete({
      where: { id },
      include: {
        pantry: true,
      },
    });
  }
}
