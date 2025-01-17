import { Test, TestingModule } from '@nestjs/testing';
import { PatientsDiseasesJunctionController } from './patients-diseases-junction.controller';
import { PatientsDiseasesJunctionService } from './patients-diseases-junction.service';

describe('PatientsDiseasesJunctionController', () => {
  let controller: PatientsDiseasesJunctionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientsDiseasesJunctionController],
      providers: [PatientsDiseasesJunctionService],
    }).compile();

    controller = module.get<PatientsDiseasesJunctionController>(PatientsDiseasesJunctionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
