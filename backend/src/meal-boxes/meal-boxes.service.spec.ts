import { Test, TestingModule } from '@nestjs/testing';
import { MealBoxesService } from './meal-boxes.service';

describe('MealBoxesService', () => {
  let service: MealBoxesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealBoxesService],
    }).compile();

    service = module.get<MealBoxesService>(MealBoxesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
