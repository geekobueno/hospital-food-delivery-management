import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsString,
  IsOptional,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { AlertType, AlertPriority } from '@prisma/client';

export class CreateAlertDto {
  @ApiProperty({
    enum: AlertType,
    description: 'Type of the alert',
    example: AlertType.DELIVERY_DELAY,
  })
  @IsEnum(AlertType)
  @IsNotEmpty()
  type: AlertType;

  @ApiProperty({
    enum: AlertPriority,
    description: 'Priority level of the alert',
    example: AlertPriority.HIGH,
  })
  @IsEnum(AlertPriority)
  @IsNotEmpty()
  priority: AlertPriority;

  @ApiProperty({
    description: 'Alert message',
    example: 'Delivery to Room 302 is delayed due to traffic',
    minLength: 10,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  message: string;

  @ApiPropertyOptional({
    description: 'Associated meal plan ID',
    type: String,
  })
  @IsOptional()
  mealPlanId?: string;
}
