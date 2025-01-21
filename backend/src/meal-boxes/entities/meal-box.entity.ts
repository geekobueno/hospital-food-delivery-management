import { MealBox } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MealBoxEntity implements MealBox {
  @ApiProperty({
    description: 'Meal Box ID',
    example: 'automatic mongoDB',
  })
  id: string;

  @ApiProperty({
    description: 'ID of included meal Plan',
  })
  mealPlanId: string | null;

  @ApiProperty()
  boxNumber: string;

  @ApiProperty()
  sealedTime: Date;

  @ApiProperty({ required: false })
  temperature: number | null;

  @ApiProperty({ required: false })
  specialHandlingInstructions: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
