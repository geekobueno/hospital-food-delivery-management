import { Module } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { DiseaseController } from './diseases.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DiseaseController],
  providers: [DiseasesService],
  imports: [PrismaModule],
})
export class DiseasesModule {}
