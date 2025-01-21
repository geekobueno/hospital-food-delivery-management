import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Username for the account',
    example: 'johndoe',
    minLength: 5,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  username: string;

  @ApiProperty({
    description: 'User password',
    example: 'strongPassword123',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'User role',
    enum: Role,
    default: Role.ADMIN,
    required: false,
  })
  @IsEnum(Role)
  role?: Role;

  @ApiPropertyOptional({
    required: false,
    description: 'ID of the staff he is included in ',
    example: 'automatic from mongoDB',
    type: String,
  })
  staffID: string;
}
