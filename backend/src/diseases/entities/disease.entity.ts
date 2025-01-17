import { Disease } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DiseaseEntity implements Disease {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  patients: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
