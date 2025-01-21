import { Pantry } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';

export class PantryEntity implements Pantry {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  currentLoad: number;

  @ApiProperty()
  operatingHours: JsonValue;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  staff: JsonValue[];

  @ApiProperty()
  patients: JsonValue[];

  @ApiProperty()
  performance: JsonValue[];
}
