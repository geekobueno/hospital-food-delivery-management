import { PatientDiseases } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PatientsDiseasesJunctionEntity implements PatientDiseases {
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
