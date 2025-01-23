import { Test, TestingModule } from '@nestjs/testing';
import { PatientsDiseasesController } from './patients-diseases.controller';
import { PatientsDiseasesService } from './patients-diseases.service';

describe('PatientsDiseasesController', () => {
  let controller: PatientsDiseasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientsDiseasesController],
      providers: [PatientsDiseasesService],
    }).compile();

    controller = module.get<PatientsDiseasesController>(PatientsDiseasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
