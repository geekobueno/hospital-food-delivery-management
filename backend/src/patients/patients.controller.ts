import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientEntity } from './entities/patient.entity';
@ApiTags('patients')
@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create patient' })
  @ApiResponse({ status: 201, type: PatientEntity })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all patients' })
  @ApiResponse({ status: 200, type: [PatientEntity] })
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get patient by id' })
  @ApiResponse({ status: 200, type: PatientEntity })
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update patient' })
  @ApiResponse({ status: 200, type: PatientEntity })
  update(@Param('id') id: string, @Body() updatePatientDto: CreatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete patient' })
  @ApiResponse({ status: 200, type: PatientEntity })
  remove(@Param('id') id: string) {
    return this.patientService.remove(id);
  }
}
