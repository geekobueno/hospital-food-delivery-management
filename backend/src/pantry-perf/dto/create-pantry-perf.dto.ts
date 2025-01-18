import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';

export class CreatePantryPerfDto {
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
}
