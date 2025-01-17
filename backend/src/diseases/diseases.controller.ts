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
import { DiseasesService } from './diseases.service';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { DiseaseEntity } from './entities/disease.entity';

@Controller('diseases')
@ApiTags('diseases')
export class DiseasesController {
  constructor(private readonly diseasesService: DiseasesService) {}

  @Post()
  @ApiCreatedResponse({ type: DiseaseEntity })
  create(@Body() createDiseaseDto: CreateDiseaseDto) {
    return this.diseasesService.create(createDiseaseDto);
  }

  @Get()
  @ApiOkResponse({ type: DiseaseEntity, isArray: true })
  findAll() {
    return this.diseasesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DiseaseEntity })
  findOne(@Param('id') id: string) {
    return this.diseasesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DiseaseEntity })
  update(@Param('id') id: string, @Body() updateDiseaseDto: UpdateDiseaseDto) {
    return this.diseasesService.update(id, updateDiseaseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DiseaseEntity })
  remove(@Param('id') id: string) {
    return this.diseasesService.remove(id);
  }
}
