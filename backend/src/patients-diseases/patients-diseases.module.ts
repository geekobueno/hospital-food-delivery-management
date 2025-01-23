import { Module } from '@nestjs/common';
import { PatientsDiseasesService } from './patients-diseases.service';
import { PatientsDiseasesController } from './patients-diseases.controller';

@Module({
  controllers: [PatientsDiseasesController],
  providers: [PatientsDiseasesService],
})
export class PatientsDiseasesModule {}
