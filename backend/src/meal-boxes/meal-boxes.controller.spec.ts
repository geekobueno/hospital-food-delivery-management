import { Test, TestingModule } from '@nestjs/testing';
import { MealBoxesController } from './meal-boxes.controller';
import { MealBoxesService } from './meal-boxes.service';

describe('MealBoxesController', () => {
  let controller: MealBoxesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealBoxesController],
      providers: [MealBoxesService],
    }).compile();

    controller = module.get<MealBoxesController>(MealBoxesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
