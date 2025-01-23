import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientDiseaseDto } from './dto/create-patients-disease.dto';
import { UpdatePatientsDiseaseDto } from './dto/update-patients-disease.dto';

@Injectable()
export class PatientsDiseasesService {
  constructor(private prisma: PrismaService) {}

  create(createPatientsDiseaseDto: CreatePatientDiseaseDto) {
    return this.prisma.patientDiseases.create({
      data: createPatientsDiseaseDto,
      include: {
        patient: true,
        disease: true,
      },
    });
  }

  findAll() {
    return this.prisma.patientDiseases.findMany({
      include: {
        disease: true,
        patient: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.patientDiseases.findUnique({
      where: { id },
      include: {
        disease: true,
        patient: true,
      },
    });
  }

  update(id: string, updatePatientsDiseaseDto: UpdatePatientsDiseaseDto) {
    return this.prisma.patientDiseases.update({
      data: updatePatientsDiseaseDto,
      where: { id },
      include: {
        disease: true,
        patient: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.patientDiseases.delete({
      where: { id },
      include: {
        patient: true,
        disease: true,
      },
    });
  }
}
