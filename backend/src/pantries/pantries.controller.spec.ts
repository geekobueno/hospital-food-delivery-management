import { Test, TestingModule } from '@nestjs/testing';
import { PantriesController } from './pantries.controller';
import { PantriesService } from './pantries.service';

describe('PantriesController', () => {
  let controller: PantriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantriesController],
      providers: [PantriesService],
    }).compile();

    controller = module.get<PantriesController>(PantriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
