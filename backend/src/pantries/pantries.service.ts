import { Injectable } from '@nestjs/common';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PantriesService {
  constructor(private prisma: PrismaService) {}

  create(createPantryDto: CreatePantryDto) {
    return this.prisma.pantry.createMany({ data: createPantryDto });
  }

  findAll() {
    return this.prisma.pantry.findMany();
  }

  findOne(id: string) {
    return this.prisma.pantry.findUnique({ where: { id } });
  }

  update(id: string, updatePantryDto: UpdatePantryDto) {
    return this.prisma.pantry.update({ where: { id }, data: updatePantryDto });
  }

  remove(id: string) {
    return this.prisma.pantry.delete({ where: { id } });
  }
}
