import { Module } from '@nestjs/common';
import { PatientsDiseasesJunctionService } from './patients-diseases-junction.service';
import { PatientsDiseasesJunctionController } from './patients-diseases-junction.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PatientsDiseasesJunctionController],
  providers: [PatientsDiseasesJunctionService],
  imports: [PrismaModule],
})
export class PatientsDiseasesJunctionModule {}
