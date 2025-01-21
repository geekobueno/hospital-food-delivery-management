import { PantryPerformance } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';

export class PantryPerfEntity implements PantryPerformance {
  @ApiProperty()
  id: string;

  @ApiProperty()
  pantryId: string;

  @ApiProperty()
  pantry: JsonValue;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  mealsPrepared: number;

  @ApiProperty()
  mealsDelivered: number;

  @ApiProperty()
  delayedDeliveries: number;

  @ApiProperty()
  averagePreparationTime: number;

  @ApiProperty()
  averageDeliveryTime: number;

  @ApiProperty()
  staffUtilization: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
