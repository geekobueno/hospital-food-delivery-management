import { PantryPerformance } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PantryPerfEntity implements PantryPerformance {
  @ApiProperty()
  id: string;

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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
