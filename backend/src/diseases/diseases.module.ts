import { Module } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { DiseasesController } from './diseases.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DiseasesController],
  providers: [DiseasesService],
  imports: [PrismaModule],
})
export class DiseasesModule {}
