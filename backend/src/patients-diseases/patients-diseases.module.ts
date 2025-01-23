import { Module } from '@nestjs/common';
import { PatientsDiseasesService } from './patients-diseases.service';
import { PatientsDiseasesController } from './patients-diseases.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [PatientsDiseasesController],
  providers: [PatientsDiseasesService],
  imports: [PrismaModule],
})
export class PatientsDiseasesModule {}
