import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { Contact } from 'src/types/contact.type';

export class CreateStaffDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  user: JsonValue;

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
  shiftSchedule: JsonValue;

  @ApiProperty()
  pantry: JsonValue;

  @ApiProperty()
  pantryId: string;

  @ApiProperty()
  preparedMeals: JsonValue[];

  @ApiProperty()
  deliveredMeals: JsonValue[];
}
