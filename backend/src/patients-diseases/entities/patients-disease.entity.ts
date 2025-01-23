import { ApiProperty } from '@nestjs/swagger';
import { PatientDiseases } from '@prisma/client';

export class PatientDiseaseEntity implements PatientDiseases {
  @ApiProperty()
  id: string;

  @ApiProperty()
  patientId: string;

  @ApiProperty()
  diseaseId: string;

  @ApiProperty()
  diagnosedAt: Date;

  @ApiProperty({ required: false })
  notes: string | null;
}
