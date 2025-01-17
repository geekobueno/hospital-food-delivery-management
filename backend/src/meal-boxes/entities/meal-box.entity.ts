import { MealBox } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MealBoxEntity implements MealBox {
  @ApiProperty()
  id: string;

  @ApiProperty()
  mealPlanId: string;

  @ApiProperty()
  mealPlan: string[];

  @ApiProperty()
  boxNumber: string;

  @ApiProperty()
  sealedTime: Date;

  @ApiProperty({ required: false })
  temperature: number;

  @ApiProperty({ required: false })
  specialHandlingInstructions: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
