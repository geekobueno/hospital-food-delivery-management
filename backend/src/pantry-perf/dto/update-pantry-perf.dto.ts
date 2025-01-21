import { PartialType } from '@nestjs/swagger';
import { CreatePantryPerfDto } from './create-pantry-perf.dto';

export class UpdatePantryPerfDto extends PartialType(CreatePantryPerfDto) {}
