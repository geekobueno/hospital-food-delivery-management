import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';

export class CreatePantryDto {
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
}
