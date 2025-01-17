import { PartialType } from '@nestjs/swagger';
import { CreatePatientsDiseasesJunctionDto } from './create-patients-diseases-junction.dto';

export class UpdatePatientsDiseasesJunctionDto extends PartialType(
  CreatePatientsDiseasesJunctionDto,
) {}
