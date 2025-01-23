import { PartialType } from '@nestjs/swagger';
import { CreatePatientDiseaseDto } from './create-patients-disease.dto';

export class UpdatePatientsDiseaseDto extends PartialType(
  CreatePatientDiseaseDto,
) {}
