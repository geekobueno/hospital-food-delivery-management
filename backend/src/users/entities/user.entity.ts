import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class UserEntity implements User {
  @ApiProperty({
    description: 'User ID',
    example: 'automatic from mongoDB',
  })
  id: string;

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
    required: true,
  })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({
    required: false,
    description: 'ID of the staff he is included in ',
    example: 'automatic from mongoDB',
  })
  staffId: string | null;

  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
