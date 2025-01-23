import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientController } from './patients.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PatientController],
  providers: [PatientsService],
  imports: [PrismaModule],
})
export class PatientsModule {}
