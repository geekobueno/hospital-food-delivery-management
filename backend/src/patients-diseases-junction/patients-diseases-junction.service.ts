import { Injectable } from '@nestjs/common';
import { CreatePatientsDiseasesJunctionDto } from './dto/create-patients-diseases-junction.dto';
import { UpdatePatientsDiseasesJunctionDto } from './dto/update-patients-diseases-junction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientsDiseasesJunctionService {
  constructor(private prisma: PrismaService) {}

  create(createPatientsDiseasesJunctionDto: CreatePatientsDiseasesJunctionDto) {
    return this.prisma.patientDiseases.createMany({
      data: createPatientsDiseasesJunctionDto,
    });
  }

  findAll() {
    return this.prisma.patientDiseases.findMany();
  }

  findOne(id: string) {
    return this.prisma.patientDiseases.findUnique({ where: { id } });
  }

  update(
    id: string,
    updatePatientsDiseasesJunctionDto: UpdatePatientsDiseasesJunctionDto,
  ) {
    return this.prisma.patientDiseases.update({
      where: { id },
      data: updatePatientsDiseasesJunctionDto,
    });
  }

  remove(id: string) {
    return this.prisma.patientDiseases.delete({ where: { id } });
  }
}
