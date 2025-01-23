import { Test, TestingModule } from '@nestjs/testing';
import { DiseaseController } from './diseases.controller';
import { DiseasesService } from './diseases.service';

describe('DiseasesController', () => {
  let controller: DiseaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiseaseController],
      providers: [DiseasesService],
    }).compile();

    controller = module.get<DiseaseController>(DiseaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
