import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { MealBoxEntity } from './entities/meal-box.entity';
import { MealBoxesService } from './meal-boxes.service';
import { CreateMealBoxDto } from './dto/create-meal-box.dto';
import { UpdateMealBoxDto } from './dto/update-meal-box.dto';

@Controller('meal-boxes')
@ApiTags('meal-boxes')
export class MealBoxesController {
  constructor(private readonly mealBoxesService: MealBoxesService) {}

  @Post()
  @ApiCreatedResponse({ type: MealBoxEntity })
  create(@Body() createMealBoxDto: CreateMealBoxDto) {
    return this.mealBoxesService.create(createMealBoxDto);
  }

  @Get()
  @ApiOkResponse({ type: MealBoxEntity, isArray: true })
  findAll() {
    return this.mealBoxesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MealBoxEntity })
  findOne(@Param('id') id: string) {
    return this.mealBoxesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MealBoxEntity })
  update(@Param('id') id: string, @Body() updateMealBoxDto: UpdateMealBoxDto) {
    return this.mealBoxesService.update(id, updateMealBoxDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MealBoxEntity })
  remove(@Param('id') id: string) {
    return this.mealBoxesService.remove(id);
  }
}
