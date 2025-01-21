import { ApiProperty } from '@nestjs/swagger';
import { Alert, AlertType, AlertPriority } from '@prisma/client';

export class AlertEntity implements Alert {
  @ApiProperty({
    description: 'Alert ID',
    example: 'automatic from mongoDB',
  })
  id: string;

  @ApiProperty({
    enum: AlertType,
    description: 'Type of the alert',
    example: AlertType.DELIVERY_DELAY,
  })
  type: AlertType;

  @ApiProperty({
    enum: AlertPriority,
    description: 'Priority level of the alert',
    example: AlertPriority.HIGH,
  })
  priority: AlertPriority;

  @ApiProperty({
    description: 'Alert message',
    example: 'Delivery to Room 302 is delayed due to traffic',
  })
  message: string;

  @ApiProperty({
    description: 'Associated meal plan ID',
    required: false,
  })
  mealPlanId: string | null;

  @ApiProperty({
    description: 'Whether the alert has been resolved',
    example: false,
  })
  isResolved: boolean;

  @ApiProperty({
    description: 'When the alert was resolved',
    required: false,
  })
  resolvedAt: Date | null;

  @ApiProperty({
    description: 'Creation timestamp',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
  })
  updatedAt: Date;
}
