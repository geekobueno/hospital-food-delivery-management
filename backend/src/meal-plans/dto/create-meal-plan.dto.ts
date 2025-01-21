import { MealStatus } from 'src/enums/mealStatus.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { MealTime } from 'src/enums/mealTime.enum';
import { JsonValue } from '@prisma/client/runtime/library';

export class CreateMealPlanDto {
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

  @ApiProperty()
  calories: number;

  @ApiProperty()
  nutritionalInfo: JsonValue;

  @ApiProperty()
  @IsEnum(MealStatus)
  status: MealStatus;

  @ApiProperty({ required: false })
  preparationStartTime: Date;

  @ApiProperty({ required: false })
  preparationEndTime: Date;

  @ApiProperty({ required: false })
  deliveryStartTime: Date;

  @ApiProperty({ required: false })
  deliveryEndTime: Date;

  @ApiProperty({ required: false })
  deliveryNotes: string;

  @ApiProperty()
  patient: JsonValue;

  @ApiProperty({ required: false })
  preparedBy: JsonValue;

  @ApiProperty({ required: false })
  preparedById: string;

  @ApiProperty({ required: false })
  deliveredBy: JsonValue;

  @ApiProperty({ required: false })
  deliveredById: string;

  @ApiProperty()
  alerts: JsonValue[];
}
