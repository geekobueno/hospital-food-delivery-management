import { MealStatus, MealTime, MealPlan } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { JsonValue } from '@prisma/client/runtime/library';

export class MealPlanEntity implements MealPlan {
  @ApiProperty()
  id: string;

  @ApiProperty()
  patientId: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  @IsEnum(MealTime)
  mealTime: MealTime;

  @ApiProperty()
  ingredients: string[];

  @ApiProperty()
  specialInstructions: string[];

  @ApiProperty({
    required: false,
  })
  calories: number | null;

  @ApiProperty({
    required: false,
  })
  nutritionalInfo: JsonValue | null;

  @ApiProperty()
  @IsEnum(MealStatus)
  status: MealStatus;

  @ApiProperty({ required: false })
  preparationStartTime: Date | null;

  @ApiProperty({ required: false })
  preparationEndTime: Date | null;

  @ApiProperty({ required: false })
  deliveryStartTime: Date | null;

  @ApiProperty({ required: false })
  deliveryEndTime: Date | null;

  @ApiProperty({ required: false })
  deliveryNotes: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false })
  preparedById: string | null;

  @ApiProperty({ required: false })
  deliveredById: string | null;
}
