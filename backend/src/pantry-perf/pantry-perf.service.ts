import { Injectable } from '@nestjs/common';
import { CreatePantryPerfDto } from './dto/create-pantry-perf.dto';
import { UpdatePantryPerfDto } from './dto/update-pantry-perf.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PantryPerfService {
  constructor(private prisma: PrismaService) {}

  create(createPantryPerfDto: CreatePantryPerfDto) {
    return this.prisma.pantryPerformance.createMany({
      data: createPantryPerfDto,
    });
  }

  findAll() {
    return this.prisma.pantryPerformance.findMany();
  }

  findOne(id: string) {
    return this.prisma.pantryPerformance.findUnique({ where: { id } });
  }

  update(id: string, updatePantryPerfDto: UpdatePantryPerfDto) {
    return this.prisma.pantryPerformance.update({
      where: { id },
      data: updatePantryPerfDto,
    });
  }

  remove(id: string) {
    return this.prisma.pantryPerformance.delete({ where: { id } });
  }
}
