import { PartialType } from '@nestjs/swagger';
import { CreateMealBoxDto } from './create-meal-box.dto';

export class UpdateMealBoxDto extends PartialType(CreateMealBoxDto) {}
