import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DiseasesService } from './diseases.service';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { DiseaseEntity } from './entities/disease.entity';

@ApiTags('diseases')
@Controller('diseases')
export class DiseaseController {
  constructor(private readonly diseaseService: DiseasesService) {}

  @Post()
  @ApiOperation({ summary: 'Create disease' })
  @ApiResponse({ status: 201, type: DiseaseEntity })
  create(@Body() createDiseaseDto: CreateDiseaseDto) {
    return this.diseaseService.create(createDiseaseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all diseases' })
  @ApiResponse({ status: 200, type: [DiseaseEntity] })
  findAll() {
    return this.diseaseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get disease by id' })
  @ApiResponse({ status: 200, type: DiseaseEntity })
  findOne(@Param('id') id: string) {
    return this.diseaseService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update disease' })
  @ApiResponse({ status: 200, type: DiseaseEntity })
  update(@Param('id') id: string, @Body() updateDiseaseDto: CreateDiseaseDto) {
    return this.diseaseService.update(id, updateDiseaseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete disease' })
  @ApiResponse({ status: 200, type: DiseaseEntity })
  remove(@Param('id') id: string) {
    return this.diseaseService.remove(id);
  }
}
