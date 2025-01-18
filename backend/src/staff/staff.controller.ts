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
import { StaffEntity } from './entities/staff.entity';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Controller('staff')
@ApiTags('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  @ApiCreatedResponse({ type: StaffEntity })
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get()
  @ApiOkResponse({ type: StaffEntity, isArray: true })
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: StaffEntity })
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: StaffEntity })
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: StaffEntity })
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
