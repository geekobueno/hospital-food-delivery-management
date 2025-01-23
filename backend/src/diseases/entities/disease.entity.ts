import { ApiProperty } from '@nestjs/swagger';
import { Disease } from '@prisma/client';

export class DiseaseEntity implements Disease {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
