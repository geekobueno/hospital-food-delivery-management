import { ApiProperty } from '@nestjs/swagger';

export class CreateMealBoxDto {
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
}
