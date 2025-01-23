import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { DiseasesModule } from './diseases/diseases.module';
import { MealBoxesModule } from './meal-boxes/meal-boxes.module';
import { MealPlansModule } from './meal-plans/meal-plans.module';
import { PantriesModule } from './pantries/pantries.module';
import { StaffModule } from './staff/staff.module';
import { PantryPerfModule } from './pantry-perf/pantry-perf.module';
import { AlertsModule } from './alerts/alerts.module';
import { PatientsDiseasesModule } from './patients-diseases/patients-diseases.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PatientsModule,
    DiseasesModule,
    MealBoxesModule,
    MealPlansModule,
    PantriesModule,
    StaffModule,
    PantryPerfModule,
    AlertsModule,
    PatientsDiseasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
