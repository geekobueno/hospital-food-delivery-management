import { Alert } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { AlertType } from 'src/enums/alertType.enum';
import { AlertPriority } from 'src/enums/alertPriority.enum';
import { JsonValue } from '@prisma/client/runtime/library';

export class AlertEntity implements Alert {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: AlertType;

  @ApiProperty()
  priority: AlertPriority;

  @ApiProperty()
  message: string;

  @ApiProperty({ required: false })
  mealPlanId: string;

  @ApiProperty({ required: false })
  mealPlan: JsonValue;

  @ApiProperty()
  isResolved: boolean;

  @ApiProperty({ required: false })
  resolvedAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
