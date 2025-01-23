import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { Contact } from '@prisma/client';

export class CreateStaffDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  contactInfo: Contact;

  @ApiProperty()
  role: string;

  @ApiProperty({
    default: true,
  })
  isAvailable: boolean;

  @ApiProperty({
    required: false,
  })
  shiftSchedule: JsonValue | null;

  @ApiProperty()
  pantryId: string;
}
