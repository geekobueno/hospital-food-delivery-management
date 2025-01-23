import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatientDiseaseEntity } from './entities/patients-disease.entity';
import { PatientsDiseasesService } from './patients-diseases.service';
import { CreatePatientDiseaseDto } from './dto/create-patients-disease.dto';
import { UpdatePatientsDiseaseDto } from './dto/update-patients-disease.dto';

@Controller('patients-diseases')
export class PatientsDiseasesController {
  constructor(
    private readonly patientsDiseasesService: PatientsDiseasesService,
  ) {}

  @Post(':id/diseases')
  @ApiOperation({ summary: 'Add disease to patient' })
  @ApiResponse({ status: 201, type: PatientDiseaseEntity })
  create(@Body() createPatientDiseaseDto: CreatePatientDiseaseDto) {
    return this.patientsDiseasesService.create(createPatientDiseaseDto);
  }

  @Get()
  findAll() {
    return this.patientsDiseasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsDiseasesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePatientsDiseaseDto: UpdatePatientsDiseaseDto,
  ) {
    return this.patientsDiseasesService.update(id, updatePatientsDiseaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsDiseasesService.remove(id);
  }
}
