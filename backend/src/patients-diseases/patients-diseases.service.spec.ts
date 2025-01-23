import { Test, TestingModule } from '@nestjs/testing';
import { PatientsDiseasesService } from './patients-diseases.service';

describe('PatientsDiseasesService', () => {
  let service: PatientsDiseasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientsDiseasesService],
    }).compile();

    service = module.get<PatientsDiseasesService>(PatientsDiseasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
