import { Test, TestingModule } from '@nestjs/testing';
import { PantriesService } from './pantries.service';

describe('PantriesService', () => {
  let service: PantriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PantriesService],
    }).compile();

    service = module.get<PantriesService>(PantriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
