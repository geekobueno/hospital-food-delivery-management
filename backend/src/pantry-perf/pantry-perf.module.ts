import { Module } from '@nestjs/common';
import { PantryPerfService } from './pantry-perf.service';
import { PantryPerfController } from './pantry-perf.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PantryPerfController],
  providers: [PantryPerfService],
  imports: [PrismaModule],
})
export class PantryPerfModule {}
