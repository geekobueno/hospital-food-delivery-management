import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsInt,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Gender, Contact } from '@prisma/client';

export class CreatePatientDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEnum(Gender)
  @ApiProperty({ enum: Gender })
  gender: Gender;

  @IsInt()
  @ApiProperty()
  age: number;

  @IsString()
  @ApiProperty()
  roomNumber: string;

  @IsString()
  @ApiProperty()
  bedNumber: string;

  @IsString()
  @ApiProperty()
  floorNumber: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty()
  allergies: string[];

  @ValidateNested()
  @ApiProperty()
  contactNumber: Contact;

  @ValidateNested()
  @ApiProperty()
  emergencyContact: Contact;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  dietaryNotes: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  additionalNotes: string | null;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  pantryId: string | null;
}
