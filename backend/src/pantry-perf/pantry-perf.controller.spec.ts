import { Test, TestingModule } from '@nestjs/testing';
import { PantryPerfController } from './pantry-perf.controller';
import { PantryPerfService } from './pantry-perf.service';

describe('PantryPerfController', () => {
  let controller: PantryPerfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantryPerfController],
      providers: [PantryPerfService],
    }).compile();

    controller = module.get<PantryPerfController>(PantryPerfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
