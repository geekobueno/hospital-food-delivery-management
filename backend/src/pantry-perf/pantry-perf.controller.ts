import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PantryPerfService } from './pantry-perf.service';
import { PantryPerfEntity } from './entities/pantry-perf.entity';
import { CreatePantryPerfDto } from './dto/create-pantry-perf.dto';
import { UpdatePantryPerfDto } from './dto/update-pantry-perf.dto';

@Controller('pantry-perf')
@ApiTags('pantry-perf')
export class PantryPerfController {
  constructor(private readonly pantryPerfService: PantryPerfService) {}

  @Post()
  @ApiCreatedResponse({ type: PantryPerfEntity })
  create(@Body() createPantryPerfDto: CreatePantryPerfDto) {
    return this.pantryPerfService.create(createPantryPerfDto);
  }

  @Get()
  @ApiOkResponse({ type: PantryPerfEntity, isArray: true })
  findAll() {
    return this.pantryPerfService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PantryPerfEntity })
  findOne(@Param('id') id: string) {
    return this.pantryPerfService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PantryPerfEntity })
  update(
    @Param('id') id: string,
    @Body() updatePantryPerfDto: UpdatePantryPerfDto,
  ) {
    return this.pantryPerfService.update(id, updatePantryPerfDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PantryPerfEntity })
  remove(@Param('id') id: string) {
    return this.pantryPerfService.remove(id);
  }
}
