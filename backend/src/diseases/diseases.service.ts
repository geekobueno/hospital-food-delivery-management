import { Injectable } from '@nestjs/common';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiseasesService {
  constructor(private prisma: PrismaService) {}

  create(createDiseaseDto: CreateDiseaseDto) {
    return this.prisma.disease.createMany({
      data: createDiseaseDto,
    });
  }

  findAll() {
    return this.prisma.disease.findMany();
  }

  findOne(id: string) {
    return this.prisma.disease.findUnique({ where: { id } });
  }

  update(id: string, updateDiseaseDto: UpdateDiseaseDto) {
    return this.prisma.disease.update({
      where: { id },
      data: updateDiseaseDto,
    });
  }

  remove(id: string) {
    return this.prisma.disease.delete({
      where: { id },
    });
  }
}
