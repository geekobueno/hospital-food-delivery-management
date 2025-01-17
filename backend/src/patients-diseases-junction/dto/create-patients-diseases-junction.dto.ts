import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientsDiseasesJunctionDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  patient: string;

  @ApiProperty()
  patientId: string;

  @ApiProperty()
  disease: string;

  @ApiProperty()
  diseaseId: string;

  @ApiProperty()
  diagnosedAt: Date;

  @ApiProperty({
    required: false,
  })
  notes: string;
}
