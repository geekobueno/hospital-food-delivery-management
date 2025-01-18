import { Test, TestingModule } from '@nestjs/testing';
import { PantryPerfService } from './pantry-perf.service';

describe('PantryPerfService', () => {
  let service: PantryPerfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PantryPerfService],
    }).compile();

    service = module.get<PantryPerfService>(PantryPerfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
