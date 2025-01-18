import { MealPlanEntity } from './entities/meal-plan.entity';
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
import { MealPlansService } from './meal-plans.service';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';

@Controller('meal-plans')
@ApiTags('meal-plans')
export class MealPlansController {
  constructor(private readonly mealPlansService: MealPlansService) {}

  @Post()
  @ApiCreatedResponse({ type: MealPlanEntity })
  create(@Body() createMealPlanDto: CreateMealPlanDto) {
    return this.mealPlansService.create(createMealPlanDto);
  }

  @Get()
  @ApiOkResponse({
    type: MealPlanEntity,
    isArray: true,
  })
  findAll() {
    return this.mealPlansService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: MealPlanEntity,
  })
  findOne(@Param('id') id: string) {
    return this.mealPlansService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: MealPlanEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateMealPlanDto: UpdateMealPlanDto,
  ) {
    return this.mealPlansService.update(id, updateMealPlanDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: MealPlanEntity,
  })
  remove(@Param('id') id: string) {
    return this.mealPlansService.remove(id);
  }
}
