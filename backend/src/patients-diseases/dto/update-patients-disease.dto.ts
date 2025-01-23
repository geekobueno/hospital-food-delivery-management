import { PartialType } from '@nestjs/swagger';
import { CreatePatientsDiseaseDto } from './create-patients-disease.dto';

export class UpdatePatientsDiseaseDto extends PartialType(CreatePatientsDiseaseDto) {}
