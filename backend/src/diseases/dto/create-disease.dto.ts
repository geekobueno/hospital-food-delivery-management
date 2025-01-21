import { ApiProperty } from '@nestjs/swagger';

export class CreateDiseaseDto {
  @ApiProperty({
    description: 'Disease name',
    example: 'Diabetes',
  })
  name: string;

  @ApiProperty({
    description: 'Disease description',
    required: false,
  })
  description: string;

  @ApiProperty({
    description: 'List of patients affected by the disease',
    required: true,
  })
  patients: string[];
}
