import { Disease } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DiseaseEntity implements Disease {
  @ApiProperty({
    description: 'Disease ID',
    example: 'automatic from MongoDB',
  })
  id: string;

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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
