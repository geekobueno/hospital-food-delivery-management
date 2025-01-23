import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  create(createPatientDto: CreatePatientDto) {
    return this.prisma.patient.create({
      data: createPatientDto,
      include: {
        diseases: true,
        assignedPantry: true,
      },
    });
  }

  findAll() {
    return this.prisma.patient.findMany({
      include: {
        diseases: true,
        assignedPantry: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.patient.findUnique({
      where: { id },
      include: {
        diseases: true,
        assignedPantry: true,
      },
    });
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    return this.prisma.patient.update({
      where: { id },
      data: updatePatientDto,
      include: {
        diseases: true,
        assignedPantry: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.patient.delete({
      where: { id },
      include: {
        diseases: true,
        assignedPantry: true,
      },
    });
  }
}
