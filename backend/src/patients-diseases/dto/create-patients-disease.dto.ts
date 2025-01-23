import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreatePatientDiseaseDto {
  @IsString()
  @ApiProperty()
  patientId: string;

  @IsString()
  @ApiProperty()
  diseaseId: string;

  @ApiProperty()
  diagnosedAt: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  notes: string | null;
}
