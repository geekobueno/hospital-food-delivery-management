import { Test, TestingModule } from '@nestjs/testing';
import { PatientsDiseasesJunctionService } from './patients-diseases-junction.service';

describe('PatientsDiseasesJunctionService', () => {
  let service: PatientsDiseasesJunctionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientsDiseasesJunctionService],
    }).compile();

    service = module.get<PatientsDiseasesJunctionService>(PatientsDiseasesJunctionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
