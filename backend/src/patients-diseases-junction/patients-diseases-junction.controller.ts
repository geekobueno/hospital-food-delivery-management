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
import { PatientsDiseasesJunctionEntity } from './entities/patients-diseases-junction.entity';
import { PatientsDiseasesJunctionService } from './patients-diseases-junction.service';
import { CreatePatientsDiseasesJunctionDto } from './dto/create-patients-diseases-junction.dto';
import { UpdatePatientsDiseasesJunctionDto } from './dto/update-patients-diseases-junction.dto';

@Controller('patients-diseases-junction')
@ApiTags('patients-diseases-junction')
export class PatientsDiseasesJunctionController {
  constructor(
    private readonly patientsDiseasesJunctionService: PatientsDiseasesJunctionService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: PatientsDiseasesJunctionEntity })
  create(
    @Body()
    createPatientsDiseasesJunctionDto: CreatePatientsDiseasesJunctionDto,
  ) {
    return this.patientsDiseasesJunctionService.create(
      createPatientsDiseasesJunctionDto,
    );
  }

  @Get()
  @ApiOkResponse({ type: PatientsDiseasesJunctionEntity, isArray: true })
  findAll() {
    return this.patientsDiseasesJunctionService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PatientsDiseasesJunctionEntity })
  findOne(@Param('id') id: string) {
    return this.patientsDiseasesJunctionService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PatientsDiseasesJunctionEntity })
  update(
    @Param('id') id: string,
    @Body()
    updatePatientsDiseasesJunctionDto: UpdatePatientsDiseasesJunctionDto,
  ) {
    return this.patientsDiseasesJunctionService.update(
      id,
      updatePatientsDiseasesJunctionDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: PatientsDiseasesJunctionEntity })
  remove(@Param('id') id: string) {
    return this.patientsDiseasesJunctionService.remove(id);
  }
}
