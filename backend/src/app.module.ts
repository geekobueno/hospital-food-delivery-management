import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { DiseasesModule } from './diseases/diseases.module';
import { PatientsDiseasesJunctionModule } from './patients-diseases-junction/patients-diseases-junction.module';
import { MealBoxesModule } from './meal-boxes/meal-boxes.module';
import { MealPlansModule } from './meal-plans/meal-plans.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PatientsModule,
    DiseasesModule,
    PatientsDiseasesJunctionModule,
    MealBoxesModule,
    MealPlansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
