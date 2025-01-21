import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PantriesService } from './pantries.service';
import { PantriesController } from './pantries.controller';

@Module({
  controllers: [PantriesController],
  providers: [PantriesService],
  imports: [PrismaModule],
})
export class PantriesModule {}
