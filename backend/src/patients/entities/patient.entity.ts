import { ApiProperty } from '@nestjs/swagger';
import { Gender, Contact, Patient } from '@prisma/client';
export class PatientEntity implements Patient {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: Gender })
  gender: Gender;

  @ApiProperty()
  age: number;

  @ApiProperty()
  roomNumber: string;

  @ApiProperty()
  bedNumber: string;

  @ApiProperty()
  floorNumber: string;

  @ApiProperty({ type: [String] })
  allergies: string[];

  @ApiProperty()
  contactNumber: Contact;

  @ApiProperty()
  emergencyContact: Contact;

  @ApiProperty({ required: false })
  dietaryNotes: string | null;

  @ApiProperty({ required: false })
  additionalNotes: string | null;

  @ApiProperty()
  pantryId: string | null;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
