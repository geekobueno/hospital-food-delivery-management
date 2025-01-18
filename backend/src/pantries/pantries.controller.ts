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
import { PantryEntity } from './entities/pantry.entity';
import { PantriesService } from './pantries.service';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { UpdatePantryDto } from './dto/update-pantry.dto';

@ApiTags('pantries')
@Controller('pantries')
export class PantriesController {
  constructor(private readonly pantriesService: PantriesService) {}

  @Post()
  @ApiCreatedResponse({ type: PantryEntity })
  create(@Body() createPantryDto: CreatePantryDto) {
    return this.pantriesService.create(createPantryDto);
  }

  @Get()
  @ApiOkResponse({ type: PantryEntity, isArray: true })
  findAll() {
    return this.pantriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PantryEntity })
  findOne(@Param('id') id: string) {
    return this.pantriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PantryEntity })
  update(@Param('id') id: string, @Body() updatePantryDto: UpdatePantryDto) {
    return this.pantriesService.update(id, updatePantryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PantryEntity })
  remove(@Param('id') id: string) {
    return this.pantriesService.remove(id);
  }
}
