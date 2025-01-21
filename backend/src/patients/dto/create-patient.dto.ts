import { ApiProperty } from '@nestjs/swagger';
import { Gender } from 'src/enums/gender.enum';
import { Contact } from 'src/types/contact.type';
import { IsEnum } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty({
    description: 'full name of the patient',
  })
  name: string;

  @ApiProperty({
    description: 'list of diseases of the patient',
  })
  diseases: string[];

  @ApiProperty({
    description: "list of patient's allergies",
  })
  allergies: string[];

  @ApiProperty()
  roomNumber: string;

  @ApiProperty()
  bedNumber: string;

  @ApiProperty()
  floorNumber: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty()
  contactNumber: Contact;

  @ApiProperty()
  emergencyContact: Contact;

  @ApiProperty({
    description: 'notes about specific nutritionist facts about the patient',
    required: false,
  })
  dietaryNotes: string;

  @ApiProperty({
    required: false,
  })
  additionalNotes: string;

  @ApiProperty({
    description: 'Is the patient in the hospital or not',
    default: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'meal plans tailored to the patient',
  })
  mealPlan: string[];

  @ApiProperty()
  pantryId: string;
}

//TODO add pantry
