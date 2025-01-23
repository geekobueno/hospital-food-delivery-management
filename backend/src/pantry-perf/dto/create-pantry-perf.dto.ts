import { ApiProperty } from '@nestjs/swagger';

export class CreatePantryPerfDto {
  @ApiProperty()
  pantryId: string;

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
