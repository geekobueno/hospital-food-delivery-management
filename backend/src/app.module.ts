import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { DiseasesModule } from './diseases/diseases.module';

@Module({
  imports: [PrismaModule, UsersModule, PatientsModule, DiseasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
